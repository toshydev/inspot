import { render, screen } from "@testing-library/react";
import LocationList from ".";

const testCities = ["Cologne", "Berlin", "Hamburg", "Munich"];

test("renders all cities from testCities with city name", () => {
  render(<LocationList cities={testCities} />);
  const cities = screen.getAllByRole("heading", { name: /city/i });
  expect(cities).toHaveLength(testCities.length);
});
