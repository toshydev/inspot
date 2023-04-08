import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetail";
import { useFilterStore } from "../../store";
import { getDistance } from "geolib";

export default function EventDetailPage({ events }) {
  const { currentLocation, userLocation, range } = useFilterStore(
    (state) => state
  );
  const router = useRouter();
  const { id } = router.query;
  const currentEvent = events.find((event) => event.id === id);
  const distance =
    userLocation.length > 0
      ? getDistance(
          { latitude: userLocation[0], longitude: userLocation[1] },
          {
            latitude: currentEvent.location.coordinates[0],
            longitude: currentEvent.location.coordinates[1],
          }
        )
      : null;

  if (currentEvent) {
    return (
      <EventDetail
        event={currentEvent}
        currentLocation={currentLocation}
        range={range}
        distance={distance}
      />
    );
  }
  return <>Loading...</>;
}
