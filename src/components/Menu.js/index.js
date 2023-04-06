import { useFilterStore } from "../../store";
import { ExpandBig } from "../../utils/icons";
import StyledButton from "../StyledButton";
import StyledMenu from "../StyledMenu";

export default function Menu({ label }) {
  const setFilterMenu = useFilterStore((state) => state.setFilterMenu);
  return (
    <StyledMenu>
      <StyledButton
        type="button"
        onClick={() => setFilterMenu("genre")}
        aria-label={`${label} menu`}
      >
        {label}
        <ExpandBig />
      </StyledButton>
    </StyledMenu>
  );
}
