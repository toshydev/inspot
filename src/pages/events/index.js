import useSWR from "swr";
import BookmarkLink from "../../components/BookmarkLink";
import Filter from "../../components/Filter";
import ListView from "../../components/ListView";
import LocationLink from "../../components/LocationLink";
import Spinner from "../../components/Spinner";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledSection from "../../components/StyledSection";
import { useFilterStore } from "../../store";

export default function EventListPage() {
  const eventsPage = useFilterStore((state) => state.eventsPage);
  const eventSort = useFilterStore((state) => state.eventSort);
  const eventKeywords = useFilterStore((state) => state.eventKeywords);
  const segments = useFilterStore((state) => state.segments);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const { data, isLoading, error } = useSWR(
    `/api/events?sort=${eventSort}&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&classificationName=${segments
      .filter((segment) => segment.isActive)
      .map(
        (segment) => segment.name
      )}&keyword=${eventKeywords}&locale=*&countryCode=DE&page=${eventsPage}`
  );

  return (
    <>
      <StyledHeader>
        <StyledHeadline variant="header">Explore</StyledHeadline>
        <StyledSection variant="links">
          <LocationLink />
          <BookmarkLink />
        </StyledSection>
      </StyledHeader>
      <StyledContent>
        <Filter type="event" />
        {isLoading ? (
          <Spinner />
        ) : error || !data._embedded ? (
          <p>No events found. Please adjust filter.</p>
        ) : (
          <ListView type="events" data={data._embedded.events} />
        )}
      </StyledContent>
    </>
  );
}
