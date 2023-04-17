import useSWR from "swr";
import BookmarkButton from "../../components/BookmarkButton";
import EventList from "../../components/EventList";
import LocationButton from "../../components/LocationButton";
import Spinner from "../../components/Spinner";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
import StyledMenu from "../../components/StyledMenu";
import { useFilterStore } from "../../store";

export default function FavoriteListPage() {
  const venueSort = useFilterStore((state) => state.venueSort);
  const eventSort = useFilterStore((state) => state.eventSort);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);
  const resource = useFilterStore((state) => state.resource);

  const { data, isLoading, error } = useSWR(
    `/api/${resource}?sort=${
      resource === "events" ? eventSort : venueSort
    }&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&locale=*&countryCode=DE`
  );

  return (
    <>
      <StyledHeader>
        <StyledMenu>
          <h1>Saved Events</h1>
        </StyledMenu>
        <LocationButton />
        <BookmarkButton />
      </StyledHeader>
      <StyledContent>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p>No events found. Please adjust filter.</p>
        ) : (
          <EventList events={data._embedded.events} />
        )}
      </StyledContent>
    </>
  );
}
