import { useRouter } from "next/router";
import EventDetail from "~/components/EventDetail";

export default function EventDetailPage({ events }) {
  const router = useRouter();
  const { id } = router.query;
  const currentEvent = events.find((event) => event.id === id);
  return <EventDetail event={currentEvent} />;
}
