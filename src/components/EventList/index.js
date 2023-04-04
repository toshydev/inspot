import Link from "next/link";
import EventListPreview from "../EventListPreview";
import StyledListContainer from "../StyledListContainer";
import { useFilterStore } from "~/store";

import styled from "styled-components";
import StyledDivider from "../StyledDivider";

const StyledEventPreviewLink = styled(Link)`
  color: unset;
  width: 100%;
  height: 3rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function EventList({ events }) {
  const genres = useFilterStore((state) => state.genres);
  const activeGenres = genres
    .filter((genre) => genre.isActive)
    .map((genre) => genre.genre);

  const tags = useFilterStore((state) => state.tags);

  const activeGenreEvents = events.filter((event) =>
    activeGenres.includes(event.type)
  );

  // Tag filter, will need improvement
  const filteredEvents = filterWithTags();

  function filterWithTags() {
    const filteredEvents = [];
    for (const event of activeGenreEvents) {
      for (const tag of tags) {
        if (
          event.title.toLowerCase().includes(tag) ||
          event.description.toLowerCase().includes(tag)
        ) {
          filteredEvents.push(event);
        }
      }
    }
    return filteredEvents;
  }

  return (
    <StyledListContainer>
      {filteredEvents.length === 0 ? (
        <p>Select genres or remove tags</p>
      ) : (
        filteredEvents.map((event) => (
          <StyledEventPreviewLink key={event.id} href={`/events/${event.id}`}>
            <EventListPreview event={event} />
            <StyledDivider />
          </StyledEventPreviewLink>
        ))
      )}
    </StyledListContainer>
  );
}
