import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useRouter } from "next/router";
import useSWR from "swr";
import StyledContent from "../../components/StyledContent";
import VenueDetail from "../../components/VenueDetail";
import { useFilterStore } from "../../store";

export default function VenueDetailPage() {
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(
    id && `/api/venues/venues?id=${id}&locale=*&countryCode=DE`
  );
  const venue = data?._embedded.venues[0];
  console.log(data?._embedded.venues[0]);
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
      {venue ? (
        <VenueDetail
          venue={venue}
          currentLocation={currentLocation}
          range={range}
          distance={distance}
        />
      ) : (
        <p>No events found. Adjust filter.</p>
      )}
    </StyledContent>
  );
}
