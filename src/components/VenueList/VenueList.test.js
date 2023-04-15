import { render, screen } from "@testing-library/react";
import VenueList from ".";
import { testVenues } from "../../lib/mockData";

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

test("renders all venues in the VenueList", () => {
  render(<VenueList venues={testVenues} />);
  const venues = screen.getAllByRole("heading", { level: 4 });
  expect(venues).toHaveLength(testVenues.length);
});
