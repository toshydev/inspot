import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import EventListPreview from "../EventListPreview";
import StyledDivider from "../StyledDivider";
import StyledListContainer from "../StyledListContainer";

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
  const [filteredEvents, setFilteredEvents] = useState(events);
  const genres = useFilterStore((state) => state.genres);
  const tags = useFilterStore((state) => state.tags);

  const setGenres = genres.filter((genre) => genre.isActive).length;

  useEffect(() => {
    if (setGenres === 0 && tags.length > 0) {
      setFilteredEvents(
        events.filter((event) => {
          return tags.some((tag) => {
            return (
              event.title.toLowerCase().includes(tag) ||
              event.description.toLowerCase().includes(tag)
            );
          });
        })
      );
    }
    if (tags.length === 0 && setGenres > 0) {
      setFilteredEvents(
        events.filter((event) => {
          return genres.some((genre) => {
            return event.type === genre.genre && genre.isActive;
          });
        })
      );
    }
    if (tags.length > 0 && setGenres > 0) {
      setFilteredEvents(
        events.filter((event) => {
          return genres.some((genre) => {
            return tags.every((tag) => {
              return (
                event.type === genre.genre &&
                genre.isActive &&
                (event.title.toLowerCase().includes(tag) ||
                  event.description.toLowerCase().includes(tag))
              );
            });
          });
        })
      );
    }
    if (tags.length === 0 && setGenres === 0) {
      setFilteredEvents(events);
    }
  }, [events, genres, tags, setGenres]);

  return (
    <StyledListContainer>
      {filteredEvents.length === 0 ? (
        <p>Adjust genres and/or tags</p>
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
