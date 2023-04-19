import styled from "styled-components";
import EventListPreview from "../EventListPreview";
import SaveButton from "../SaveButton";
import StyledList from "../StyledList";
import StyledLink from "../StyledLink";

const StyledContainer = styled.div`
  width: 100%;
`;

export default function EventList({ events }) {
  return (
    <StyledList>
      {events.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        events.map((event) => (
          <StyledContainer key={event.id}>
            <StyledLink
              href={`/events/${event.id}`}
              aria-label={`go to details page of ${event.name}`}
            >
              <EventListPreview event={event} />
            </StyledLink>
            <SaveButton id={event.id} position="preview" />
          </StyledContainer>
        ))
      )}
    </StyledList>
  );
}
