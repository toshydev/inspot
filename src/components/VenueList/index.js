import styled from "styled-components";
import LikeButton from "../LikeButton";
import StyledListContainer from "../StyledListContainer";
import StyledPreviewLink from "../StyledPreviewLink";
import VenueListPreview from "../VenueListPreview";

const StyledContainer = styled.div`
  width: 100%;
`;

export default function VenueList({ venues }) {
  return (
    <StyledListContainer>
      {venues.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        venues.map((venue) => (
          <StyledContainer key={venue.id}>
            <StyledPreviewLink
              href={`/venues/${venue.id}`}
              aria-label={`go to details page of ${venue.name}`}
              style={{ height: "6rem" }}
            >
              <VenueListPreview venue={venue} />
            </StyledPreviewLink>
            <LikeButton id={venue.id} position="preview" />
          </StyledContainer>
        ))
      )}
    </StyledListContainer>
  );
}
