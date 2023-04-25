import { useFilterStore } from "../../store";
import StyledSection from "../StyledSection";
import TabSelect from "../TabSelect";

export default function CategoriesList() {
  const segments = useFilterStore((state) => state.segments);
  const toggleSegment = useFilterStore((state) => state.toggleSegment);

  return (
    <StyledSection variant="filter">
      {segments.map(({name, isActive}) => {
        return (
          <TabSelect
            key={name}
            variant={name}
            label={name}
            id={name}
            checked={isActive}
            onChange={() => toggleSegment(name)}
            isActive={isActive}
            text={name === "Miscellaneous" ? "Other" : name}
          />
        );
      })}
    </StyledSection>
  );
}
