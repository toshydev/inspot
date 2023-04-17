import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useRouter } from "next/router";
import useSWR from "swr";
import StyledContent from "../../components/StyledContent";
import VenueDetail from "../../components/VenueDetail";
import { useFilterStore } from "../../store";
import Spinner from "../../components/Spinner";

export default function VenueDetailPage() {
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useSWR(
    id && `/api/venues?id=${id}&locale=*&countryCode=DE`
  );
  const venue = data?._embedded.venues[0];
  const distance =
    location.length > 0 && venue?.location
      ? getDistance(
          {
            latitude: Geohash.decode(location).lat,
            longitude: Geohash.decode(location).lon,
          },
          {
            latitude: venue.location.latitude,
            longitude: venue.location.longitude,
          }
        )
      : null;

  return (
    <StyledContent>
      {isLoading ? (
        <Spinner />
      ) : error || !data?._embedded ? (
        <p>No events found. Adjust filter.</p>
      ) : (
        <VenueDetail
          venue={data._embedded.venues[0]}
          currentLocation={currentLocation}
          range={range}
          distance={distance}
        />
      )}
    </StyledContent>
  );
}
