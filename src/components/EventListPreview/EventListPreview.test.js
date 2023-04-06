import { render, screen } from "@testing-library/react";
import EventListPreview from ".";

const testEvent = {
  title: "Organ Recital in Frankfurt Cathedral",
  type: "concert",
  description:
    "Enjoy an evening of beautiful music in the stunning setting of Frankfurt Cathedral, featuring the cathedral's magnificent organ.",
  information:
    "The program will include works by Bach, Vierne, and Widor, performed by the cathedral's organist.",
  startDate: "2023-09-02",
  endDate: "2023-09-02",
  startTime: "19:30",
  endTime: "21:00",
  location: {
    type: "Point",
    coordinates: [50.110264, 8.68219],
    address: "Domplatz 1, 60311 Frankfurt am Main, Germany",
  },
  organizer: "624ed4f4c4b2f15b1cfe4932",
};

test("renders the start date and title of the event", () => {
  render(<EventListPreview event={testEvent} />);
  const date = screen.getByText(/\d+.\d+.\d+/i);
  const title = screen.getByRole("heading", { level: 3 });

  expect(date).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
