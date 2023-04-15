import StyledListContainer from "../StyledListContainer";
import StyledPreviewLink from "../StyledPreviewLink";
import VenueListPreview from "../VenueListPreview";

export default function VenueList({ venues }) {
  return (
    <StyledListContainer>
      {venues.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        venues.map((venue) => (
          <StyledPreviewLink
            key={venue.id}
            href={`/venues/${venue.id}`}
            aria-label={`go to details page of ${venue.name}`}
            style={{ height: "6rem" }}
          >
            <VenueListPreview venue={venue} />
          </StyledPreviewLink>
        ))
      )}
    </StyledListContainer>
  );
}
