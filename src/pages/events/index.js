import EventFilter from "~/components/EventFilter";
import EventList from "~/components/EventList";

export default function EventListPage({ events, genres }) {
  return (
    <>
      <EventFilter genres={genres} />
      <EventList events={events} />;
    </>
  );
}
