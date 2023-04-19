import styled from "styled-components";
import LikeButton from "../LikeButton";
import StyledList from "../StyledList";
import StyledLink from "../StyledLink";
import VenueListPreview from "../VenueListPreview";

const StyledContainer = styled.div`
  width: 100%;
`;

export default function VenueList({ venues }) {
  return (
    <StyledList>
      {venues.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        venues.map((venue) => (
          <StyledContainer key={venue.id}>
            <StyledLink
              href={`/venues/${venue.id}`}
              aria-label={`go to details page of ${venue.name}`}
              style={{ height: "6rem" }}
            >
              <VenueListPreview venue={venue} />
            </StyledLink>
            <LikeButton id={venue.id} position="preview" />
          </StyledContainer>
        ))
      )}
    </StyledList>
  );
}
