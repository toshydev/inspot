import Link from "next/link";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import getFilteredEvents from "../../utils/getFilteredEvents";
import EventListPreview from "../EventListPreview";
import StyledListContainer from "../StyledListContainer";

const StyledEventPreviewLink = styled(Link)`
  color: unset;
  width: 90%;
  height: 3rem;
  text-decoration: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function EventList({ events }) {
  const { genres, tags } = useFilterStore((state) => state);
  const setGenres = genres.filter((genre) => genre.isActive).length;
  const filteredEvents = getFilteredEvents(events, setGenres, genres, tags);

  return (
    <StyledListContainer>
      {filteredEvents.length === 0 ? (
        <p>Adjust genres and/or tags</p>
      ) : (
        filteredEvents.map((event) => (
          <StyledEventPreviewLink
            key={event.id}
            href={`/events/${event.id}`}
            aria-label={`go to details page of ${event.title}`}
          >
            <EventListPreview event={event} />
          </StyledEventPreviewLink>
        ))
      )}
    </StyledListContainer>
  );
}
