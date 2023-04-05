import { useEffect } from "react";
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
  const city = useFilterStore((state) => state.city);
  const setCity = useFilterStore((state) => state.setCity);
  const sortedCities = cities.slice().sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {}, [city]);

  return (
    <StyledListContainer>
      {sortedCities.map((cityItem) => {
        return (
          <StyledLocationItem key={cityItem}>
            <StyledLocationButton
              type="button"
              current={cityItem === city}
              onClick={() => setCity(cityItem)}
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
