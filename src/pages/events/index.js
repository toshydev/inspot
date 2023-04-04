import EventFilter from "~/components/EventFilter";
import EventList from "~/components/EventList";

export default function EventListPage({ events }) {
  return (
    <>
      <EventFilter />
      <EventList events={events} />
    </>
  );
}
