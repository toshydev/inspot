import Location from "../../../icons/place_black_36dp.svg";
import EventFilter from "../../components/EventFilter";
import EventList from "../../components/EventList";
import StyledHeader from "../../components/StyledHeader";
import StyledIconLink from "../../components/StyledIconLink";

export default function EventListPage({ events }) {
  return (
    <>
      <StyledHeader>
        <h1>Explore</h1>
        <StyledIconLink href="/location">
          <Location />
        </StyledIconLink>
      </StyledHeader>
      <EventFilter />
      <EventList events={events} />
    </>
  );
}
