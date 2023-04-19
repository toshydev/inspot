import LikeButton from "../LikeButton";
import StyledLink from "../StyledLink";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";
import VenueListPreview from "../VenueListPreview";

export default function VenueList({ venues }) {
  return (
    <StyledList>
      {venues.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        venues.map((venue) => (
          <StyledListItem key={venue.id}>
            <StyledLink
              href={`/venues/${venue.id}`}
              aria-label={`go to details page of ${venue.name}`}
              style={{ height: "6rem" }}
            >
              <VenueListPreview venue={venue} />
            </StyledLink>
            <LikeButton id={venue.id} position="preview" />
          </StyledListItem>
        ))
      )}
    </StyledList>
  );
}
