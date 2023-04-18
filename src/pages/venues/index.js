import useSWR from "swr";
import BookmarkButton from "../../components/BookmarkButton";
import LocationButton from "../../components/LocationButton";
import Spinner from "../../components/Spinner";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
import VenueFilter from "../../components/VenueFilter";
import VenueList from "../../components/VenueList";
import { useFilterStore } from "../../store";

export default function VenueListPage() {
  const venuesPage = useFilterStore((state) => state.venuesPage);
  const venueSort = useFilterStore((state) => state.venueSort);
  const venueKeywords = useFilterStore((state) => state.venueKeywords);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const { data, isLoading, error } = useSWR(
    `/api/venues?sort=${venueSort}&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&keyword=${venueKeywords}&locale=*&countryCode=DE&page=${venuesPage}`
  );
    
  return (
    <>
      <StyledHeader>
        <h1>Venues</h1>
        <LocationButton />
        <BookmarkButton />
      </StyledHeader>
      <StyledContent>
        <VenueFilter />
        {isLoading ? (
          <Spinner />
        ) : error || !data._embedded ? (
          <p>No events found. Please adjust filter.</p>
        ) : (
          <VenueList venues={data._embedded.venues} />
        )}
      </StyledContent>
    </>
  );
}
