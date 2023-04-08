import styled from "styled-components";
import { useFilterStore } from "../../store";
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

export default function LocationList({ cities }) {
  const {
    city,
    setCity,
    currentLocation,
    toggleCurrentLocation,
    unsetCurrentLocation,
  } = useFilterStore((state) => state);

  if (city && cities.indexOf(city) < 0) {
    cities.push(city);
  }
  const sortedCities = cities
    .slice()
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  return (
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
      {sortedCities.map((cityItem) => {
        return (
          <StyledLocationItem key={cityItem}>
            <StyledLocationButton
              type="button"
              current={cityItem === city}
              onClick={() => {
                setCity(cityItem);
                unsetCurrentLocation();
              }}
              aria-label={`select city: ${cityItem}`}
            >
              <h4 aria-label={cityItem} style={{ textAlign: "center" }}>
                {cityItem}
              </h4>
            </StyledLocationButton>
          </StyledLocationItem>
        );
      })}
    </StyledListContainer>
  );
}
