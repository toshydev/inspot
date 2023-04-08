import styled from "styled-components";
import shortenText from "../../utils/shortenText";
import StyledListItem from "../StyledListItem";

const StyledEventPreviewDate = styled.time`
  width: 25%;
  margin: auto;
`;

const StyledEventHeadline = styled.h4`
  width: 50%;
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
        <StyledEventHeadline aria-label={event.title}>
          {shortenText(event.title)}
        </StyledEventHeadline>
      </StyledListItem>
    </>
  );
}
