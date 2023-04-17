import { render, screen } from "@testing-library/react";
import LocationFilter from ".";

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

test("renders a button for current location and a search bar for location lookup", () => {
  render(<LocationFilter />);
  const button = screen.getAllByRole("button", { name: /current location/i });
  const searchBar = screen.getAllByRole("searchbox", {
    name: /search/i,
  });
  expect(button).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
});
