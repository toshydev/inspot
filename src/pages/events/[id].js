import { useRouter } from "next/router";
import EventDetail from "../../components/EventDetail";
import { useFilterStore } from "../../store";
import { getDistance } from "geolib";
import useSWR from "swr";

// https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=DE"

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events/";
const SUFFIX =
  "?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=DE";

export default function EventDetailPage({ events }) {
  const { currentLocation, userLocation, range } = useFilterStore(
    (state) => state
  );
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(id ? BASE_URL + id + SUFFIX : null);
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

  console.log(data);

  if (data) {
    return (
      <EventDetail
        event={data}
        currentLocation={currentLocation}
        range={range}
        distance={distance}
      />
    );
  }
  return <>Loading...</>;
}
