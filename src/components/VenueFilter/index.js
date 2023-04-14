import { v4 as uuidv4 } from "uuid";
import { useFilterStore } from "../../store.js";
import { ClearBig } from "../../utils/icons.js";
import SearchInput from "../SearchInput/index.js";
import StyledDropdown from "../StyledDropdown.js";
import StyledFilterSection from "../StyledFilterSection.js";
import StyledIconButton from "../StyledIconButton.js";
import StyledTag from "../StyledTag.js";

export default function VenueFilter() {
  const addVenueKeywords = useFilterStore((state) => state.addVenueKeywords);
  const venueKeywords = useFilterStore((state) => state.venueKeywords);
  const deleteVenueKeyword = useFilterStore(
    (state) => state.deleteVenueKeyword
  );
  const resetVenuesFilter = useFilterStore((state) => state.resetVenuesFilter);
  const filterMenu = useFilterStore((state) => state.filterMenu);
  const setFilterMenu = useFilterStore((state) => state.setFilterMenu);

  return (
    <>
      <StyledFilterSection>
        <SearchInput onAddKeywords={addVenueKeywords} />
        <StyledIconButton
          onClick={() => {
            resetVenuesFilter();
            setFilterMenu("");
          }}
          aria-label="Clear filter"
        >
          <ClearBig />
        </StyledIconButton>
      </StyledFilterSection>
      <StyledDropdown isActive={filterMenu.search}>
        {venueKeywords.map((keyword) => (
          <StyledTag key={uuidv4()}>
            {keyword}
            <StyledIconButton
              type="button"
              onClick={() => deleteVenueKeyword(keyword)}
            ></StyledIconButton>
          </StyledTag>
        ))}
      </StyledDropdown>
    </>
  );
}
