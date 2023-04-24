import { useWindowStore } from "../../store";
import EventListPreview from "../EventListPreview";
import FavoriteButton from "../FavoriteButton";
import StyledLink from "../StyledLink";
import StyledList from "../StyledList";
import StyledListItem from "../StyledListItem";
import StyledSection from "../StyledSection";
import VenueListPreview from "../VenueListPreview";

export default function ListView({ type, data }) {
  const width = useWindowStore((state) => state.width);
  const imageHeight = width / (16 / 9);

  return (
    <StyledList variant="events">
      {data.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        data.map((object) => (
          <StyledListItem
            key={object.id}
            variant="listview"
            imageHeight={imageHeight}
          >
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
              <FavoriteButton id={object.id} type={type} />
            </StyledSection>
          </StyledListItem>
        ))
      )}
    </StyledList>
  );
}
