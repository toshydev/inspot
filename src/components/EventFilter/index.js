import { v4 as uuidv4 } from "uuid";
import { useFilterStore } from "../../store.js";
import { ClearBig } from "../../utils/icons.js";
import Menu from "../Menu.js";
import SearchInput from "../SearchInput/index.js";
import StyledDropdown from "../StyledDropdown.js";
import StyledFilterSection from "../StyledFilterSection.js";
import StyledIconButton from "../StyledIconButton.js";
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
        <StyledIconButton
          onClick={() => {
            resetEventsFilter();
            setFilterMenu("");
          }}
          aria-label="Clear filter"
        >
          <ClearBig />
        </StyledIconButton>
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
            <StyledIconButton
              type="button"
              onClick={() => deleteEventKeyword(keyword)}
            ></StyledIconButton>
          </StyledTag>
        ))}
      </StyledDropdown>
    </>
  );
}
