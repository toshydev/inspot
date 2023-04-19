import SaveButton from "../SaveButton";
import SpotlightListPreview from "../SpotlightListPreview";
import StyledLink from "../StyledLink";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";

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
            <SaveButton id={event.id} position="spotlight" />
          </StyledListItem>
        ))
      )}
    </StyledList>
  );
}
