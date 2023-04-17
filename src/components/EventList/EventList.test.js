import { render, screen } from "@testing-library/react";
import EventList from ".";
import { testEvents } from "../../lib/mockData";

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

test("renders all events in the EventList", async () => {
  render(<EventList events={testEvents} />);
  const events = screen.getAllByRole("heading", { level: 4 });
  expect(events).toHaveLength(testEvents.length);
});

test("renders the days, hours or minutes left until event start", () => {
  render(<EventList events={testEvents} />);

  const timeLeft = screen.getAllByLabelText(/time left/i);

  expect(timeLeft).toHaveLength(testEvents.length);
});
