import styled from "styled-components";
import shortenText from "../../utils/shortenText";
import StyledListItem from "../StyledListItem";

const StyledEventPreviewDate = styled.time`
  width: 35%;
  text-align: center;
`;

export default function EventListPreview({ event }) {
  const date = new Date(event.startDate);
  const formattedDate = new Intl.DateTimeFormat("de-DE").format(date);
  return (
    <>
      <StyledListItem>
        <StyledEventPreviewDate dateTime={event.startDate} aria-label="date">
          {formattedDate}
        </StyledEventPreviewDate>
        <h4 aria-label={event.title}>{shortenText(event.title)}</h4>
      </StyledListItem>
    </>
  );
}
