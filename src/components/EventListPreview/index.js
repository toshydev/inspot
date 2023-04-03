import StyledListItem from "../StyledListItem";
import StyledDivider from "../StyledDivider";
import shortenText from "../../utils/shortenText";

export default function EventListPreview({ event }) {
  const date = new Date(event.startDate);
  const formattedDate = new Intl.DateTimeFormat("de-DE").format(date);
  return (
    <>
      <StyledListItem>
        <time dateTime={event.startDate} aria-label="date">
          {formattedDate}
        </time>
        <h4 aria-label={event.title}>{shortenText(event.title)}</h4>
      </StyledListItem>
      <StyledDivider />
    </>
  );
}
