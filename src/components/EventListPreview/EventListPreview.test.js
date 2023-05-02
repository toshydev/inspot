import { render, screen } from "@testing-library/react";
import EventListPreview from ".";
import { testEvents } from "../../lib/mockData";

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

test("renders a date and heading", () => {
  render(<EventListPreview event={testEvents[0]} />);

  const date = screen.getByLabelText(/date/i);
  const heading = screen.getByRole("heading", { name: testEvents[0].name });

  expect(date).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
});
