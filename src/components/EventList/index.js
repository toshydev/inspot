import Link from "next/link";
import EventListPreview from "../EventListPreview";
import StyledListContainer from "../StyledListContainer";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function EventList({ events }) {
  return (
    <StyledListContainer>
      {events.map((event) => (
        <EventListPreview key={uid()} event={event} />
      ))}
    </StyledListContainer>
  );
}
