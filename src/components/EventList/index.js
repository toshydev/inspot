import EventListPreview from "../EventListPreview";
import StyledListContainer from "../StyledListContainer";

export default function EventList({ events }) {
  return (
    <StyledListContainer>
      {events.map((event) => (
        <EventListPreview key={event.id} event={event} />
      ))}
    </StyledListContainer>
  );
}
