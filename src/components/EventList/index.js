import EventListPreview from "../EventListPreview";
import SaveButton from "../SaveButton";
import StyledLink from "../StyledLink";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";

export default function EventList({ events }) {
  return (
    <StyledList>
      {events.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        events.map((event) => (
          <StyledListItem key={event.id}>
            <StyledLink
              href={`/events/${event.id}`}
              aria-label={`go to details page of ${event.name}`}
            >
              <EventListPreview event={event} />
            </StyledLink>
            <SaveButton id={event.id} position="preview" />
          </StyledListItem>
        ))
      )}
    </StyledList>
  );
}
