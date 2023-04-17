import { render, renderHook, screen } from "@testing-library/react";
import EventDetail from ".";
import { testEvents } from "../../lib/mockData";
import { useFilterStore } from "../../store";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn(),
    };
  },
}));

const { range, currentLocation } = renderHook(() => useFilterStore);

test("renders a title, startDate, startTime, address", () => {
  render(<EventDetail event={testEvents[0]} />);
  const title = screen.getByRole("heading", { name: testEvents[0].name });
  const startDate = screen.getByLabelText(/start date/i);
  const startTime = screen.getByLabelText(/start time/i);
  const address = screen.getByLabelText(/address/i);

  expect(title).toBeInTheDocument();
  expect(startDate).toBeInTheDocument();
  expect(startTime).toBeInTheDocument();
  expect(address).toBeInTheDocument();
});

test("renders a description and information if available", () => {
  render(<EventDetail event={testEvents[0]} />);
  const description = screen.getByRole("heading", { name: /description/i });
  const information = screen.getByRole("link", { name: /more/i });

  expect(description).toBeInTheDocument();
  expect(information).toBeInTheDocument();
});

test("renders a save button", () => {
  render(<EventDetail event={testEvents[0]} />);
  const saveButton = screen.getByRole("button", { name: /save event/i });
  expect(saveButton).toBeInTheDocument();
});

test("renders the days, hours or minutes left until event start", () => {
  render(
    <EventDetail
      event={testEvents[0]}
      range={range}
      currentLocation={currentLocation}
      distance={5000}
    />
  );

  const timeLeft = screen.getByLabelText(/time left/i);

  expect(timeLeft).toBeInTheDocument();
});
