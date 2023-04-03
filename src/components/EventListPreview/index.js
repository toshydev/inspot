import StyledListItem from "../StyledListItem";
import StyledDivider from "../StyledDivider";

export default function EventListPreview({ event }) {
  return (
    <>
      <StyledListItem>
        <time
          dateTime={event.startDate}
          aria-label="date"
        >{`${event.startDate.slice(8, 10)}.${event.startDate.slice(
          5,
          7
        )}.${event.startDate.slice(0, 4)}`}</time>
        <h4 aria-label="title">{event.title}</h4>
      </StyledListItem>
      <StyledDivider />
    </>
  );
}
