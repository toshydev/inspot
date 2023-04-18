import { PlaceBig } from "../../utils/icons";
import StyledIconLink from "../StyledIconLink";

export default function LocationButton() {
  return (
    <StyledIconLink
      href="/location"
      aria-label="go to location settings"
      style={{ marginLeft: "auto" }}
    >
      <PlaceBig />
    </StyledIconLink>
  );
}
