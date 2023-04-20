import { useFilterStore } from "../../store";
import StyledSection from "../StyledSection";
import TabSelect from "../TabSelect";

export default function CategoriesList() {
  const segments = useFilterStore((state) => state.segments);
  const toggleSegment = useFilterStore((state) => state.toggleSegment);

  return (
    <StyledSection variant="filter">
      {segments.map((segment) => {
        return (
          <TabSelect
            key={segment.name}
            variant={segment.name}
            label={segment.name}
            id={segment.name}
            checked={segment.isActive}
            onChange={() => toggleSegment(segment.name)}
            isActive={segment.isActive}
            text={segment.name === "Miscellaneous" ? "Other" : segment.name}
          />
        );
      })}
    </StyledSection>
  );
}
