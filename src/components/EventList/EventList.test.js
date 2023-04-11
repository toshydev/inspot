import { render, screen } from "@testing-library/react";
import EventList from ".";

const testEvents = [
  {
    title: "Miniature Train Show",
    type: "exhibit",
    description: "Come and see our amazing miniature train exhibit!",
    information: "Tickets are €10 per person.",
    startDate: "2023-05-01",
    endDate: "2023-05-15",
    startTime: "10:00",
    endTime: "18:00",
    location: {
      type: "Point",
      coordinates: [53.5439, 9.9884],
      address: "Kehrwieder 2-4/Block D, 20457 Hamburg, Germany",
    },
    organizer: "624ed4f4c4b2f15b1cfe4910",
    id: "9sJPAvUpFtCfEGmjZrAMx",
  },
  {
    title: "Goethe's 271st Birthday Celebration",
    type: "sightseeing",
    description:
      "Join us for a day full of celebrations to honor Johann Wolfgang von Goethe on his 271st birthday.",
    information:
      "The event will include poetry readings, musical performances, and a screening of the film 'Young Goethe in Love.'",
    startDate: "2023-08-28",
    endDate: "2023-08-28",
    startTime: "14:00",
    endTime: "19:00",
    location: {
      type: "Point",
      coordinates: [50.114988, 8.682171],
      address: "Großer Hirschgraben 23-25, 60311 Frankfurt am Main, Germany",
    },
    organizer: "624ed4f4c4b2f15b1cfe4930",
  },
  {
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
  },
];

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
