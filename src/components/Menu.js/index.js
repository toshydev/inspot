import Expand from "../../../icons/expand_more_black_36dp.svg";
import { useFilterStore } from "../../store";
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
        <Expand />
      </StyledButton>
    </StyledMenu>
  );
}
