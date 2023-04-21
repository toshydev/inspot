import EventListPreview from "../EventListPreview";
import LikeButton from "../LikeButton";
import SaveButton from "../SaveButton";
import StyledLink from "../StyledLink";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";
import StyledSection from "../StyledSection";
import VenueListPreview from "../VenueListPreview";

export default function ListView({ type, data }) {
  return (
    <StyledList variant="events">
      {data.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        data.map((object) => (
          <StyledListItem key={object.id} variant="listview">
            <StyledLink
              variant="card preview"
              href={`/${type}/${object.id}`}
              aria-label={`go to details page of ${object.name}`}
            >
              {type === "venues" ? (
                <VenueListPreview venue={object} />
              ) : (
                <EventListPreview event={object} />
              )}
            </StyledLink>
            <StyledSection variant="favorite preview">
              {type === "venues" ? (
                <LikeButton id={object.id} />
              ) : (
                <SaveButton id={object.id} />
              )}
            </StyledSection>
          </StyledListItem>
        ))
      )}
    </StyledList>
  );
}
