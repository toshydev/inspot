import Link from "next/link";
import styled from "styled-components";
import SpotlightListPreview from "../SpotlightListPreview";
import StyledListContainer from "../StyledListContainer";
import SaveButton from "../SaveButton";

const StyledSpotlightLink = styled(Link)`
  color: unset;
  width: 98%;
  height: 200px;
  text-decoration: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledContainer = styled.div`
  width: 100%;
`;

export default function SpotlightList({ events }) {
  return (
    <StyledListContainer>
      {events.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        events.map((event) => (
          <StyledContainer key={event.id}>
            <StyledSpotlightLink
              href={`/events/${event.id}`}
              aria-label={`go to details page of ${event.name}`}
            >
              <SpotlightListPreview event={event} />
            </StyledSpotlightLink>
            <SaveButton id={event.id} variant="spotlight" />
          </StyledContainer>
        ))
      )}
    </StyledListContainer>
  );
}
