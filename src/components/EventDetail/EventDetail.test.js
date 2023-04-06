import { render, screen } from "@testing-library/react";
import EventDetail from ".";

const testEvent = {
  title: "Brandenburg Gate Night Tour",
  type: "sightseeing",
  description:
    "Experience the beauty of Brandenburg Gate at night with our guided tour",
  information:
    "The tour starts at 7pm and lasts for two hours. Please arrive 15 minutes before the start of the tour. Comfortable shoes are recommended.",
  startDate: "2023-06-01",
  endDate: "2023-06-01",
  startTime: "19:00",
  endTime: "21:00",
  location: {
    type: "Point",
    coordinates: [13.377704, 52.516275],
    address: "Pariser Platz 1, 10117 Berlin, Germany",
  },
  organizer: "62427e1dbfbaa6d9b6fb58a1",
  id: "Bqs4zTSDp4spa0wP0l416",
};

test("renders a title, startDate, endDate, startTime, endTime, address", () => {
  console.log(testEvent);
  render(<EventDetail event={testEvent} />);
  const title = screen.getByRole("heading", { name: testEvent.title });
  const startDate = screen.getByLabelText(/start date/i);
  const endDate = screen.getByLabelText(/end date/i);
  const startTime = screen.getByLabelText(/start time/i);
  const endTime = screen.getByLabelText(/end time/i);
  const address = screen.getByLabelText(/address/i);
  expect(title).toBeInTheDocument();
  expect(startDate).toBeInTheDocument();
  expect(endDate).toBeInTheDocument();
  expect(startTime).toBeInTheDocument();
  expect(endTime).toBeInTheDocument();
  expect(address).toBeInTheDocument();
});

test("renders a description and information if available", () => {
  render(<EventDetail event={testEvent} />);
  const description = screen.getByRole("heading", { name: /description/i });
  const information = screen.getByRole("link", { name: /more/i });
  expect(description).toBeInTheDocument();
  expect(information).toBeInTheDocument();
});
