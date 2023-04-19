import { v4 as uuidv4 } from "uuid";
import { useFilterStore } from "../../store.js";
import { ClearBig } from "../../utils/icons.js";
import Menu from "../Menu.js";
import SearchInput from "../SearchInput/index.js";
import StyledButton from "../StyledButton.js";
import StyledDropdown from "../StyledDropdown.js";
import StyledFilterSection from "../StyledFilterSection.js";
import StyledLabel from "../StyledLabel.js";
import StyledTag from "../StyledTag.js";

export default function EventFilter() {
  const segments = useFilterStore((state) => state.segments);
  const addEventKeywords = useFilterStore((state) => state.addEventKeywords);
  const eventKeywords = useFilterStore((state) => state.eventKeywords);
  const toggleSegment = useFilterStore((state) => state.toggleSegment);
  const deleteEventKeyword = useFilterStore(
    (state) => state.deleteEventKeyword
  );
  const resetEventsFilter = useFilterStore((state) => state.resetEventsFilter);
  const filterMenu = useFilterStore((state) => state.filterMenu);
  const setFilterMenu = useFilterStore((state) => state.setFilterMenu);

  return (
    <>
      <StyledFilterSection>
        <Menu label="Filter" />
        <SearchInput onAddKeywords={addEventKeywords} />
        <StyledButton
          variant="icon"
          onClick={() => {
            resetEventsFilter();
            setFilterMenu("");
          }}
          aria-label="Clear filter"
        >
          <ClearBig />
        </StyledButton>
      </StyledFilterSection>
      <StyledDropdown isActive={filterMenu.genre} flex="column">
        {segments.map((segment) => {
          return (
            <StyledLabel
              key={segment.name}
              htmlFor={segment.name}
              isActive={segment.isActive}
            >
              {segment.name}
              <input
                id={segment.name}
                type="checkbox"
                hidden={true}
                name={segment.name}
                onChange={() => toggleSegment(segment.name)}
                checked={segment.isActive}
              />
            </StyledLabel>
          );
        })}
      </StyledDropdown>
      <StyledDropdown isActive={filterMenu.search}>
        {eventKeywords.map((keyword) => (
          <StyledTag key={uuidv4()}>
            {keyword}
            <StyledButton
              type="button"
              onClick={() => deleteEventKeyword(keyword)}
            ></StyledButton>
          </StyledTag>
        ))}
      </StyledDropdown>
    </>
  );
}
