import styled from "styled-components";
import EventListPreview from "../EventListPreview";
import SaveButton from "../SaveButton";
import StyledListContainer from "../StyledListContainer";
import StyledPreviewLink from "../StyledPreviewLink";

const StyledContainer = styled.div`
  width: 100%;
`;

export default function EventList({ events }) {
  return (
    <StyledListContainer>
      {events.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        events.map((event) => (
          <StyledContainer key={event.id}>
            <StyledPreviewLink
              href={`/events/${event.id}`}
              aria-label={`go to details page of ${event.name}`}
            >
              <EventListPreview event={event} />
            </StyledPreviewLink>
            <SaveButton id={event.id} variant="preview" />
          </StyledContainer>
        ))
      )}
    </StyledListContainer>
  );
}
