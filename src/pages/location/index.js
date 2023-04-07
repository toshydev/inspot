import LocationList from "../../components/LocationList";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledIconButton from "../../components/StyledIconButton";
import StyledIconLink from "../../components/StyledIconLink";
import { useFilterStore } from "../../store";
import { ArrowBackBig, WrongLocationBig } from "../../utils/icons";

export default function LocationPage({ cities }) {
  const { resetCity, unsetCurrentLocation } = useFilterStore((state) => state);

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
            resetCity();
            unsetCurrentLocation();
          }}
        >
          <WrongLocationBig />
        </StyledIconButton>
      </StyledHeader>
      <LocationList cities={cities} />
    </>
  );
}
