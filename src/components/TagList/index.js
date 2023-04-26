import { v4 as uuidv4 } from "uuid";
import { useFilterStore } from "../../store";
import { ClearSmall } from "../../utils/icons";
import StyledSection from "../StyledSection";
import TabSelect from "../TabSelect";

export default function TagList({ type }) {
  const venueKeywords = useFilterStore((state) => state.venueKeywords);
  const deleteVenueKeyword = useFilterStore(
    (state) => state.deleteVenueKeyword
  );
  const eventKeywords = useFilterStore((state) => state.eventKeywords);
  const deleteEventKeyword = useFilterStore(
    (state) => state.deleteEventKeyword
  );

  const tags = type === "venue" ? venueKeywords : eventKeywords;

  return (
    <StyledSection variant="tags">
      {tags.map((tag) => (
        <TabSelect
          key={uuidv4()}
          label={tag}
          id={tag}
          onChange={() =>
            type === "venue" ? deleteVenueKeyword(tag) : deleteEventKeyword(tag)
          }
        >
          <ClearSmall />
        </TabSelect>
      ))}
    </StyledSection>
  );
}
