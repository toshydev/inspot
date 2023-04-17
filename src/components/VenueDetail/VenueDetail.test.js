import { render, screen } from "@testing-library/react";
import VenueDetail from ".";
import { testVenues } from "../../lib/mockData";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn(),
    };
  },
}));

jest.mock("latlon-geohash", () => ({
  Geohash() {
    return {
      getDistance: jest.fn(),
    };
  },
}));

test("renders a name and address", () => {
  render(<VenueDetail venue={testVenues[0]} />);
  const name = screen.getByRole("heading", { name: testVenues[0].name });
  const address = screen.getByLabelText(/address/i);
  expect(name).toBeInTheDocument();
  expect(address).toBeInTheDocument();
});

test("renders a link to a website with more info", () => {
  render(<VenueDetail event={testVenues[0]} />);
  const information = screen.getByRole("link", { name: /more/i });
  expect(information).toBeInTheDocument();
});
