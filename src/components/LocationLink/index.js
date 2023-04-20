import { PlaceBig } from "../../utils/icons";
import StyledLink from "../StyledLink";
import { useFilterStore } from "../../store";

export default function LocationLink() {
  const currentLocation = useFilterStore((state) => state.currentLocation);

  return (
    <StyledLink
      variant="icon"
      header="true"
      href="/location"
      aria-label="go to location settings"
      margin="margin-left: auto"
    >
      <PlaceBig color={currentLocation ? "var(--accent)" : null} />
    </StyledLink>
  );
}
