import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useRouter } from "next/router";
import useSWR from "swr";
import EventDetail from "../../components/EventDetail";
import Spinner from "../../components/Spinner";
import StyledContent from "../../components/StyledContent";
import { useFilterStore } from "../../store";

export default function EventDetailPage() {
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(
    id && `/api/events?id=${id}&locale=*&countryCode=DE`
  );
  const event = data?._embedded.events[0];
  const distance =
    location.length > 0 && data?._embedded
      ? getDistance(
          {
            latitude: Geohash.decode(location).lat,
            longitude: Geohash.decode(location).lon,
          },
          {
            latitude: event._embedded.venues[0].location.latitude,
            longitude: event._embedded.venues[0].location.longitude,
          }
        )
      : null;

  if (isLoading) return <Spinner />;
  if (error || !data?._embedded) return <p>No events found. Adjust filter.</p>;

  return (
    <StyledContent>
      <EventDetail
        event={data._embedded.events[0]}
        currentLocation={currentLocation}
        range={range}
        distance={distance}
      />
    </StyledContent>
  );
}
