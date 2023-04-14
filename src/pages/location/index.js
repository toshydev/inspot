import LocationList from "../../components/LocationFilter";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledIconButton from "../../components/StyledIconButton";
import { useFilterStore } from "../../store";
import { WrongLocationBig } from "../../utils/icons";
import BackLink from "../../components/BackLink";

export default function LocationPage() {
  const { resetLocation, unsetCurrentLocation } = useFilterStore(
    (state) => state
  );

  return (
    <>
      <StyledHeader>
        <BackLink />
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
