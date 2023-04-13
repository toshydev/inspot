import Link from "next/link";
import styled from "styled-components";
import EventListPreview from "../EventListPreview";
import StyledListContainer from "../StyledListContainer";

const StyledEventPreviewLink = styled(Link)`
  color: unset;
  width: 98%;
  height: 10rem;
  text-decoration: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function EventList({ events }) {
  return (
    <StyledListContainer>
      {events.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        events.map((event) => (
          <StyledEventPreviewLink
            key={event.id}
            href={`/events/${event.id}`}
            aria-label={`go to details page of ${event.name}`}
          >
            <EventListPreview event={event} />
          </StyledEventPreviewLink>
        ))
      )}
    </StyledListContainer>
  );
}
