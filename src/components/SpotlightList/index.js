import SpotlightListPreview from "../SpotlightListPreview";
import StyledLink from "../StyledLink";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";
import FavoriteButton from "../FavoriteButton";

export default function SpotlightList({ events }) {
  return (
    <StyledList>
      {events.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        events.map((event) => (
          <StyledListItem key={event.id}>
            <StyledLink
              href={`/events/${event.id}`}
              aria-label={`go to details page of ${event.name}`}
            >
              <SpotlightListPreview event={event} />
            </StyledLink>
            <FavoriteButton id={event.id} />
          </StyledListItem>
        ))
      )}
    </StyledList>
  );
}
