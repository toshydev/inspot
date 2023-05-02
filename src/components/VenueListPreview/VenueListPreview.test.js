import { render, screen } from "@testing-library/react";
import VenueListPreview from ".";
import { testVenues } from "../../lib/mockData";

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

test("renders a venue name and city name", () => {
  render(<VenueListPreview venue={testVenues[0]} />);
  const venueName = screen.getByRole("heading", { name: testVenues[0].name });
  const cityName = screen.getByLabelText(testVenues[0].city.name);

  expect(venueName).toBeInTheDocument();
  expect(cityName).toBeInTheDocument();
});
