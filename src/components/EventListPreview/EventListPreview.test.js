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

test("renders the start date and title of the event", () => {
  render(<EventListPreview event={testEvents[0]} />);
  const date = screen.getByText(/\d+.\d+.\d+/i);
  const title = screen.getByRole("heading", { level: 4 });

  expect(date).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
