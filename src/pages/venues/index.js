import useSWR from "swr";
import BookmarkLink from "../../components/BookmarkLink";
import Filter from "../../components/Filter";
import LocationLink from "../../components/LocationLink";
import Spinner from "../../components/Spinner";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledSection from "../../components/StyledSection";
import { useFilterStore } from "../../store";
import ListView from "../../components/ListView";

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
        <StyledHeadline variant="header">Venues</StyledHeadline>
        <StyledSection variant="links">
          <LocationLink />
          <BookmarkLink />
        </StyledSection>
      </StyledHeader>
      <StyledContent>
        <Filter type="venue" />
        {isLoading ? (
          <Spinner />
        ) : error || !data._embedded ? (
          <p>No venues found. Please adjust filter.</p>
        ) : (
          <ListView type="venues" data={data._embedded.venues} />
        )}
      </StyledContent>
    </>
  );
}
