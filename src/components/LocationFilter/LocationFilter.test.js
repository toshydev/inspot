import { render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useFilterStore } from "../../store";
import LocationFilter from ".";

const testCities = ["Cologne", "Berlin", "Hamburg", "Munich"];

test("renders all cities from testCities with city name plus Current Location", () => {
  render(<LocationFilter cities={testCities} />);
  const cities = screen.getAllByRole("heading");
  expect(cities).toHaveLength(testCities.length + 1);
});

test("clicking on a city triggers a callback function", async () => {
  const store = renderHook(() => useFilterStore());
  const { setCity } = store.result.current;
  const user = userEvent.setup();

  render(<LocationFilter cities={testCities} />);
  const testCity1 = screen.getByRole("heading", { name: /cologne/i });
  const testCity2 = screen.getByRole("heading", { name: /hamburg/i });

  await user.click(testCity1);
  await user.click(testCity2);

  expect(setCity).toHaveBeenCalledTimes(2);
});
