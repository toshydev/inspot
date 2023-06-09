import Geohash from "latlon-geohash";
import styled from "styled-components";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { useFilterStore } from "../../store";
import PlacesAutocomplete from "../PlacesAutocomplete";

const StyledLocationButton = styled.button`
  width: 75%;
  text-align: center;
  ${({ current }) =>
    current
      ? "background: #be4bdb; color: white"
      : "background: white; color: 343434"};
  border-radius: 50px;
  padding: 0.5rem;
  border: none;
  transition: 0.15s;
  box-shadow: 0px 0px 2px hsl(0deg 0% 0% / 0.5);
  filter: drop-shadow(0 2px 2px currentColor);

  &:hover {
    ${({ current }) =>
      current
        ? "background: #9C3BB4; color: white"
        : "background: #f0f0f0; color: black"};
  }
`;

export default function LocationFilter() {
  const setLocation = useFilterStore((state) => state.setLocation);
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const toggleCurrentLocation = useFilterStore(
    (state) => state.toggleCurrentLocation
  );
  const unsetCurrentLocation = useFilterStore(
    (state) => state.unsetCurrentLocation
  );

  return (
    <>
      <StyledLocationButton
        type="button"
        current={currentLocation}
        onClick={toggleCurrentLocation}
        aria-label={`user current location`}
      >
        <h2
          aria-label="current location"
          style={{ textAlign: "center", fontSize: "1rem" }}
        >
          Current Location
        </h2>
      </StyledLocationButton>
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
