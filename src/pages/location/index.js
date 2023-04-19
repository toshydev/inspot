import BackLink from "../../components/BackLink";
import LocationFilter from "../../components/LocationFilter";
import StyledButton from "../../components/StyledButton";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import { useFilterStore } from "../../store";
import { WrongLocationBig } from "../../utils/icons";

export default function LocationPage() {
  const { resetLocation, unsetCurrentLocation } = useFilterStore(
    (state) => state
  );

  return (
    <>
      <StyledHeader>
        <BackLink />
        <StyledHeadline>Set your location</StyledHeadline>
        <StyledButton
          variant="icon"
          type="button"
          onClick={() => {
            resetLocation();
            unsetCurrentLocation();
          }}
        >
          <WrongLocationBig />
        </StyledButton>
      </StyledHeader>
      <StyledContent>
        <LocationFilter />
      </StyledContent>
    </>
  );
}
