import { useFilterStore } from "../../store";
import { ClearBig } from "../../utils/icons";
import SearchInput from "../SearchInput";
import StyledButton from "../StyledButton";
import StyledSection from "../StyledSection";

export default function SearchBar({ type }) {
  const addVenueKeywords = useFilterStore((state) => state.addVenueKeywords);
  const resetVenuesFilter = useFilterStore((state) => state.resetVenuesFilter);
  const addEventKeywords = useFilterStore((state) => state.addEventKeywords);
  const resetEventsFilter = useFilterStore((state) => state.resetEventsFilter);

  return (
    <StyledSection variant="search">
      <SearchInput
        onAddTags={type === "venue" ? addVenueKeywords : addEventKeywords}
      />
      <StyledButton
        variant="icon"
        onClick={type === "venue" ? resetVenuesFilter : resetEventsFilter}
        aria-label="Clear filter"
      >
        <ClearBig />
      </StyledButton>
    </StyledSection>
  );
}
