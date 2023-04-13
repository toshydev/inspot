import LocationList from "../../components/LocationFilter";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledIconButton from "../../components/StyledIconButton";
import StyledIconLink from "../../components/StyledIconLink";
import { useFilterStore } from "../../store";
import { ArrowBackBig, WrongLocationBig } from "../../utils/icons";

export default function LocationPage() {
  const { resetLocation, unsetCurrentLocation } = useFilterStore(
    (state) => state
  );

  return (
    <>
      <StyledHeader>
        <StyledIconLink href="/events/">
          <ArrowBackBig />
        </StyledIconLink>
        <StyledHeadline>Set your location</StyledHeadline>
        <StyledIconButton
          type="button"
          onClick={() => {
            resetLocation();
            unsetCurrentLocation();
          }}
        >
          <WrongLocationBig />
        </StyledIconButton>
      </StyledHeader>
      <LocationList />
    </>
  );
}
