import { render, screen } from "@testing-library/react";
import EventList from ".";

const testEvents = [
  {
    title: "Chocolate Tasting Workshop",
    type: "culinary",
    description:
      "Indulge in a unique chocolate tasting experience and learn the secrets of the chocolate-making process.",
    information:
      "All materials will be provided, and participants are advised to wear comfortable clothing.",
    startDate: "2023-07-10T14:00:00.000Z",
    endDate: "2023-07-10T16:00:00.000Z",
    startTime: "14:00",
    endTime: "16:00",
    location: {
      type: "Point",
      coordinates: [6.971858, 50.936527],
      address: "Am Schokoladenmuseum 1a, 50678 Köln, Germany",
    },
    organizer: "624ed4f4c4b2f15b1cfe4921",
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
    title: "Guided Tour of the Städel Museum's Collection",
    type: "sightseeing",
    description:
      "Take a guided tour of the Städel Museum's world-renowned collection of European art from the Middle Ages to the present day.",
    information:
      "The tour will be led by one of the museum's expert art historians and will cover highlights from the collection, including works by Rembrandt, Vermeer, and Monet.",
    startDate: "2023-07-15",
    endDate: "2023-07-15",
    startTime: "11:00",
    endTime: "12:30",
    location: {
      type: "Point",
      coordinates: [50.104719, 8.684342],
      address: "Schaumainkai 63, 60596 Frankfurt am Main, Germany",
    },
    organizer: "624ed4f4c4b2f15b1cfe4931",
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

test("renders all events in the EventList", () => {
  render(<EventList events={testEvents} />);
  const events = screen.getAllByRole("heading", { name: "title" });
  expect(events).toHaveLength(testEvents.length);
});
