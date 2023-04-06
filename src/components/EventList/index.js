import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import EventListPreview from "../EventListPreview";
import StyledDivider from "../StyledDivider";
import StyledListContainer from "../StyledListContainer";
import useFilter from "../../hooks/useFilter";

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
  const filteredEvents = useFilter(events);

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
