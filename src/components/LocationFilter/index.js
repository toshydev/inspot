import Geohash from "latlon-geohash";
import styled from "styled-components";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { useFilterStore } from "../../store";
import PlacesAutocomplete from "../PlacesAutocomplete";
import StyledListContainer from "../StyledListContainer";

const StyledLocationItem = styled.li`
  width: 100%;
`;

const StyledLocationButton = styled.button`
  width: 100%;
  text-align: center;
  ${({ current }) =>
    current
      ? "background: #be4bdb; color: white"
      : "background: white; color: 343434"};
  border-radius: 8px;
  border: 2px solid #343434;
  padding: 0.5rem;
  margin-bottom: 0.25rem;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075);
  transition: 0.15s;

  &:hover {
    ${({ current }) =>
      current
        ? "background: #9C3BB4; color: white"
        : "background: #f0f0f0; color: black"};
  }
`;

export default function LocationFilter() {
  const {
    setLocation,
    currentLocation,
    toggleCurrentLocation,
    unsetCurrentLocation,
  } = useFilterStore((state) => state);

  return (
    <>
      <StyledListContainer>
        <StyledLocationItem>
          <StyledLocationButton
            type="button"
            current={currentLocation}
            onClick={toggleCurrentLocation}
            aria-label={`user current location`}
          >
            <h4 aria-label="current location" style={{ textAlign: "center" }}>
              Current Location
            </h4>
          </StyledLocationButton>
        </StyledLocationItem>
      </StyledListContainer>
      <PlacesAutocomplete
        onAddressSelect={(address) => {
          getGeocode({ address: address }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            const hash = Geohash.encode(lat, lng, 9);
            setLocation(hash);
            unsetCurrentLocation();
          });
        }}
      />
    </>
  );
}
