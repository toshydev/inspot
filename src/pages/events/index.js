import EventFilter from "../../components/EventFilter";
import EventList from "../../components/EventList";
import StyledHeader from "../../components/StyledHeader";
import StyledIconLink from "../../components/StyledIconLink";
import { PlaceBig } from "../../utils/icons";

export default function EventListPage({ events }) {
  return (
    <>
      <StyledHeader>
        <h1>Explore</h1>
        <StyledIconLink href="/location">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      <EventFilter />
      <EventList events={events} />
    </>
  );
}
