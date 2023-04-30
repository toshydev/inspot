import { render, screen } from "@testing-library/react";
import ListView from ".";
import { testEvents } from "../../lib/mockData";

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

test("renders a list of events with heading and save button", () => {
  render(<ListView data={testEvents} />);

  const headings = screen.getAllByRole("heading");
  const saveButton = screen.getAllByRole("button", { name: /save/i });

  expect(headings).toHaveLength(testEvents.length);
  expect(saveButton).toHaveLength(testEvents.length);
});
