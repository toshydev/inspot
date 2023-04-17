import useSWR from "swr";
import BookmarkButton from "../../components/BookmarkButton";
import EventFilter from "../../components/EventFilter";
import EventList from "../../components/EventList";
import LocationButton from "../../components/LocationButton";
import Spinner from "../../components/Spinner";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
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
        <h1>Explore</h1>
        <LocationButton />
        <BookmarkButton />
      </StyledHeader>
      <StyledContent>
        <EventFilter />
        {isLoading ? (
          <Spinner />
        ) : error || !data._embedded ? (
          <p>No events found. Please adjust filter.</p>
        ) : (
          <EventList events={data._embedded.events} />
        )}
      </StyledContent>
    </>
  );
}
