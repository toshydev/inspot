import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventFilter from ".";

const testGenres = ["festival", "exhibit", "concert", "sightseeing", "sports"];
const testTags = ["film", "classical", "beethoven"];
const testEvents = [
  {
    title: "Berlin International Film Festival",
    type: "festival",
    description:
      "Experience the best in international cinema at our annual film festival",
    information:
      "The festival runs for ten days and includes screenings, Q&A sessions with filmmakers, and special events. Please check the schedule for details.",
    startDate: "2023-11-01",
    endDate: "2023-11-10",
    startTime: "Varies",
    endTime: "Varies",
    location: {
      type: "Point",
      coordinates: [13.388778, 52.516646],
      address: "Potsdamer Platz 10, 10785 Berlin, Germany",
    },
    organizer: "62427ed0bfbaa6d9b6fb58a3",
    id: "b8c085158e3",
  },
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
    id: "8c085158e36",
  },
  {
    title: "Classical Music Concert",
    type: "concert",
    description: "Enjoy an evening of beautiful classical music!",
    information: "Tickets are €50 per person.",
    startDate: "2023-06-01",
    endDate: "2023-06-01",
    startTime: "19:30",
    endTime: "21:30",
    location: {
      type: "Point",
      coordinates: [53.5413, 9.9842],
      address: "Platz der Deutschen Einheit 1, 20457 Hamburg, Germany",
    },
    organizer: "624ed4f4c4b2f15b1cfe4911",
    id: "c085158e365",
  },
  {
    title: "Concert at St. Michaelis Church",
    type: "concert",
    description:
      "Listen to beautiful music in the stunning setting of St. Michaelis Church!",
    information: "Tickets are €20 per person.",
    startDate: "2023-07-01",
    endDate: "2023-07-01",
    startTime: "20:00",
    endTime: "22:00",
    location: {
      type: "Point",
      coordinates: [53.5497, 9.9773],
      address: "Englische Planke 1, 20459 Hamburg, Germany",
    },
    organizer: "624ed4f4c4b2f15b1cfe4912",
    id: "085158e3650",
  },
  {
    title: "City Hall Tour",
    type: "sightseeing",
    description:
      "Take a guided tour of Hamburg's beautiful City Hall building!",
    information: "Tickets are €5 per person.",
    startDate: "2023-08-01",
    endDate: "2023-08-01",
    startTime: "10:00",
    endTime: "12:00",
    location: {
      type: "Point",
      coordinates: [53.5505, 9.9937],
      address: "Rathausmarkt 1, 20095 Hamburg, Germany",
    },
    organizer: "624ed4f4c4b2f15b1cfe4913",
    id: "85158e36508",
  },
  {
    title: "Christmas Wonderland",
    type: "festival",
    description: "Experience the magic of Christmas at Miniatur Wunderland",
    information:
      "Join us for a festive day filled with Christmas lights, decorations and much more!",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    startTime: "10:00 AM",
    endTime: "7:00 PM",
    location: {
      type: "Point",
      coordinates: [53.5438, 9.9884],
      address: "Kehrwieder 2-4/Block D, 20457 Hamburg, Germany",
    },
    organizer: "624ed4f4c4b2f15b1cfe4910",
    id: "5158e365085",
  },
  {
    title: "Beethoven's 9th Symphony",
    type: "concert",
    description:
      "Experience the power and beauty of Beethoven's final symphony.",
    information:
      "Performed by the Munich Philharmonic Orchestra and Choir, this concert is not to be missed.",
    startDate: "2023-07-15",
    endDate: "2023-07-15",
    startTime: "8:00 PM",
    endTime: "10:00 PM",
    location: {
      type: "Point",
      coordinates: [48.13719, 11.57821],
      address:
        "Philharmonie im Gasteig, Rosenheimer Str. 5, 81667 Munich, Germany",
    },
    organizer: "61442d6adc0450d0ce264f09",
    id: "6b4e8715024",
  },
  {
    title: "Beethoven's Symphony No. 9",
    type: "concert",
    description:
      "Join the Berlin Philharmonic Orchestra for a performance of Beethoven's Symphony No. 9",
    information:
      "The performance starts at 7:30pm and lasts for two hours. Please arrive 30 minutes before the start of the performance. Formal attire is recommended.",
    startDate: "2023-08-01",
    endDate: "2023-08-01",
    startTime: "19:30",
    endTime: "21:30",
    location: {
      type: "Point",
      coordinates: [13.380235, 52.510751],
      address: "Herbert-von-Karajan-Straße 1, 10785 Berlin, Germany",
    },
    organizer: "62427ed0bfbaa6d9b6fb58a3",
    id: "024b8c08515",
  },
];

test("renders one tag input field, one genre button and one clear buttons", () => {
  render(<EventFilter genres={testGenres} />);
  const genreButton = screen.getByRole("button", { name: "Genre" });
  const tagsInput = screen.getByRole("searchbox", { name: "Tags" });
  const clearButton = screen.getByRole("button", { name: "Clear" });
  expect(genreButton).toBeInTheDocument();
  expect(tagsInput).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();
});

test("setting one genre only renders events of the selected genre", () => {});

test("setting more than one genre only renders events of the selected genres", () => {});

test("setting one tag only renders events with the selected tag in their title and/or description", () => {});

test("setting several tags only renders events with the selected tags in their title and/or description", () => {});
