import SpotlightListPreview from "../SpotlightListPreview";
import StyledListContainer from "../StyledListContainer";
import styled from "styled-components";
import Link from "next/link";

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

export default function SpotlightList({ events }) {
  return (
    <StyledListContainer>
      {events.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        events.map((event) => (
          <StyledSpotlightLink
            key={event.id}
            href={`/events/${event.id}`}
            aria-label={`go to details page of ${event.name}`}
          >
            <SpotlightListPreview event={event} />
          </StyledSpotlightLink>
        ))
      )}
    </StyledListContainer>
  );
}
