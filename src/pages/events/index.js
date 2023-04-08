import EventFilter from "../../components/EventFilter";
import EventList from "../../components/EventList";
import StyledHeader from "../../components/StyledHeader";
import StyledIconLink from "../../components/StyledIconLink";
import { useFilterStore } from "../../store";
import getFilteredEvents from "../../utils/getFilteredEvents";
import { PlaceBig } from "../../utils/icons";

export default function EventListPage({ events }) {
  const { genres, tags } = useFilterStore((state) => state);
  const setGenres = genres.filter((genre) => genre.isActive).length;
  const filteredEvents = getFilteredEvents(events, setGenres, genres, tags);

  if (!events) return <>Loading Events...</>;

  return (
    <>
      <StyledHeader>
        <h1>Explore</h1>
        <StyledIconLink href="/location">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      <EventFilter />
      <EventList events={filteredEvents} />
    </>
  );
}
