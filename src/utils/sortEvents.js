import { events } from "../lib/data";

const sortedEvents = events.slice().sort((a, b) => {
  const dateA = new Date(a.startDate);
  const dateB = new Date(b.startDate);
  return dateA - dateB;
});

export default sortedEvents;
