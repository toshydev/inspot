import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useRouter } from "next/router";
import useSWR from "swr";
import EventDetail from "../../components/EventDetail";
import { useFilterStore } from "../../store";

export default function EventDetailPage() {
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(
    id && `/api/events/events?id=${id}&locale=*&countryCode=DE`
  );
  const distance =
    location.length > 0 && data?._embedded
      ? getDistance(
          {
            latitude: Geohash.decode(location).lat,
            longitude: Geohash.decode(location).lon,
          },
          {
            latitude:
              data._embedded.events[0]._embedded.venues[0].location.latitude,
            longitude:
              data._embedded.events[0]._embedded.venues[0].location.longitude,
          }
        )
      : null;

  return (
    <>
      {data?._embedded.events ? (
        <EventDetail
          event={data._embedded.events[0]}
          currentLocation={currentLocation}
          range={range}
          distance={distance}
        />
      ) : (
        <p>No events found. Adjust filter.</p>
      )}
    </>
  );
}
