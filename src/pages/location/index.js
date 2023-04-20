import BackButton from "../../components/BackButton";
import LocationFilter from "../../components/LocationFilter";
import StyledButton from "../../components/StyledButton";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledSection from "../../components/StyledSection";
import { useFilterStore } from "../../store";
import { WrongLocationBig } from "../../utils/icons";

export default function LocationPage() {
  const { resetLocation, unsetCurrentLocation } = useFilterStore(
    (state) => state
  );

  return (
    <>
      <StyledHeader>
        <BackButton />
        <StyledHeadline variant="settings">Set your location</StyledHeadline>
        <StyledSection variant="links">
          <StyledButton
            variant="icon"
            type="button"
            header
            onClick={() => {
              resetLocation();
              unsetCurrentLocation();
            }}
          >
            <WrongLocationBig />
          </StyledButton>
        </StyledSection>
      </StyledHeader>
      <StyledContent>
        <LocationFilter />
      </StyledContent>
    </>
  );
}
