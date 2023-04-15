import { render, screen } from "@testing-library/react";
import SpotlightListPreview from ".";
import { testEvents } from "../../lib/mockData";

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

test("renders the title, venue, image and time left of the event", () => {
  render(<SpotlightListPreview event={testEvents[1]} />);
  const title = screen.getByRole("heading", { level: 4 });
  const venue = screen.getByLabelText(testEvents[1]._embedded.venues[0].name);
  const image = screen.getByRole("img");
  const timeLeft = screen.getByLabelText(/time left/i);

  expect(title).toBeInTheDocument();
  expect(venue).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(timeLeft).toBeInTheDocument();
});
