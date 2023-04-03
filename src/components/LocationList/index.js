import StyledListContainer from "../StyledListContainer";
import StyledDivider from "../StyledDivider";

export default function LocationList({ cities }) {
  const sortedCities = cities.slice().sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return (
    <StyledListContainer>
      {sortedCities.map((city) => {
        return (
          <>
            <li key={city}>
              <h4 aria-label={city} style={{ textAlign: "center" }}>
                {city}
              </h4>
            </li>
            <StyledDivider />
          </>
        );
      })}
    </StyledListContainer>
  );
}
