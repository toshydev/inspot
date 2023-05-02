import { render, screen } from "@testing-library/react";
import EventDetail from ".";
import { testEvents } from "../../lib/mockData";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn(),
    };
  },
}));

test("renders a heading, back button, save button, location link, favorites link, more link, date, time, address, distance, time left", () => {
  render(<EventDetail event={testEvents[0]} range={50000} distance={25000} />);
  const title = screen.getByRole("heading", { name: testEvents[0].name });
  const back = screen.getByRole("button", { name: /back/i });
  const save = screen.getByRole("button", { name: /save/i });
  const location = screen.getByRole("link", { name: /location/i });
  const favorites = screen.getByRole("link", { name: /favorites/i });
  const more = screen.getByRole("link", { name: /more/i });
  const startDate = screen.getByLabelText(/start date/i);
  const startTime = screen.getByLabelText(/start time/i);
  const address = screen.getByLabelText(/address/i);
  const distance = screen.getByLabelText(/meters away/i);

  expect(title).toBeInTheDocument();
  expect(back).toBeInTheDocument();
  expect(save).toBeInTheDocument();
  expect(location).toBeInTheDocument();
  expect(favorites).toBeInTheDocument();
  expect(more).toBeInTheDocument();
  expect(startDate).toBeInTheDocument();
  expect(startTime).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(distance).toBeInTheDocument();
});
