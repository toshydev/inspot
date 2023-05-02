import { render, renderHook, screen } from "@testing-library/react";
import LocationFilter from ".";
import { useFilterStore } from "../../store";
import userEvent from "@testing-library/user-event";

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

const store = renderHook(() => useFilterStore());
const { toggleCurrentLocation } = store.result.current;

test("renders a button for current location and a search bar for location lookup", () => {
  render(<LocationFilter />);
  const button = screen.getByRole("button", { name: /current location/i });
  const searchBar = screen.getByRole("searchbox", {
    name: /search/i,
  });
  expect(button).toBeInTheDocument();
  expect(searchBar).toBeInTheDocument();
});

test("current location button triggers 'toggleCurrentLocation' on click", async () => {
  const user = userEvent.setup();
  render(<LocationFilter />);

  const button = screen.getByRole("button", { name: /current location/i });
  await user.click(button);

  expect(toggleCurrentLocation).toHaveBeenCalled();
});
