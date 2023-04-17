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

test("renders a heading and an aside element", () => {
  render(<VenueListPreview venue={testVenues[0]} />);

  const venueName = screen.getByRole("heading", { name: testVenues[0].name });
  const venueCity = screen.getByRole("complementary", {
    name: testVenues[0].city.name,
  });

  expect(venueName).toBeInTheDocument();
  expect(venueCity).toBeInTheDocument();
});
