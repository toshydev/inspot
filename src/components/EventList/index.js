import EventListPreview from "../EventListPreview";
import StyledListContainer from "../StyledListContainer";
import StyledPreviewLink from "../StyledPreviewLink";

export default function EventList({ events }) {
  return (
    <StyledListContainer>
      {events.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        events.map((event) => (
          <StyledPreviewLink
            key={event.id}
            href={`/events/${event.id}`}
            aria-label={`go to details page of ${event.name}`}
          >
            <EventListPreview event={event} />
          </StyledPreviewLink>
        ))
      )}
    </StyledListContainer>
  );
}
