import Link from "next/link";
import EventListPreview from "../EventListPreview";
import StyledListContainer from "../StyledListContainer";

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
  return (
    <StyledListContainer>
      {events.map((event) => (
        <StyledEventPreviewLink key={event.id} href={`/events/${event.id}`}>
          <EventListPreview event={event} />
          <StyledDivider />
        </StyledEventPreviewLink>
      ))}
    </StyledListContainer>
  );
}
