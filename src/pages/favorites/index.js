import useSWR from "swr";
import BackButton from "../../components/BackButton";
import BookmarkLink from "../../components/BookmarkLink";
import EventList from "../../components/EventList";
import LocationLink from "../../components/LocationLink";
import Spinner from "../../components/Spinner";
import StyledContent from "../../components/StyledContent";
import StyledFilterSection from "../../components/StyledFilterSection";
import StyledHeader from "../../components/StyledHeader";
import StyledHeadline from "../../components/StyledHeadline";
import StyledSection from "../../components/StyledSection";
import TabSelect from "../../components/TabSelect";
import VenueList from "../../components/VenueList";
import { useFilterStore } from "../../store";

export default function FavoriteListPage() {
  const venueSort = useFilterStore((state) => state.venueSort);
  const eventSort = useFilterStore((state) => state.eventSort);
  const savedVenues = useFilterStore((state) => state.savedVenues);
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const resource = useFilterStore((state) => state.resource);
  const setResource = useFilterStore((state) => state.setResource);

  const { data, isLoading, error } = useSWR(
    ((resource === "Events" && savedEvents.length > 0) ||
      (resource === "Venues" && savedVenues.length > 0)) &&
      `/api/${resource.toLowerCase()}?id=${
        resource === "Events" ? savedEvents : savedVenues
      }&sort=${
        resource === "events" ? eventSort : venueSort
      }&locale=*&countryCode=DE`
  );

  return (
    <>
      <StyledHeader>
        <BackButton />
        <StyledHeadline variant="settings">Saved {resource}</StyledHeadline>
        <StyledSection variant="links">
          <LocationLink />
          <BookmarkLink />
        </StyledSection>
      </StyledHeader>
      <StyledContent>
        <StyledFilterSection>
          <TabSelect
            label="Events"
            id={"events"}
            checked={resource === "Events"}
            onChange={() => setResource("Events")}
            disabled={resource === "Events"}
            isActive={resource === "Events"}
          />
          <TabSelect
            label="Venues"
            id={"venues"}
            checked={resource === "Venues"}
            onChange={() => setResource("Venues")}
            disabled={resource === "Venues"}
            isActive={resource === "Venues"}
          />
        </StyledFilterSection>
        {isLoading ? (
          <Spinner />
        ) : error || !data ? (
          <p>No {resource} found. Please adjust filter.</p>
        ) : resource === "Events" ? (
          <EventList events={data._embedded.events} />
        ) : (
          <VenueList venues={data._embedded.venues} />
        )}
      </StyledContent>
    </>
  );
}

/*  */
