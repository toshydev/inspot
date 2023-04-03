import EventListPreview from "../EventListPreview";
import StyledListContainer from "../StyledListContainer";
import { uid } from "uid";

export default function EventList({ events }) {
  return (
    <StyledListContainer>
      {events.map((event) => (
        <EventListPreview key={uid()} event={event} />
      ))}
    </StyledListContainer>
  );
}
