import styled from "styled-components";
import { useFilterStore } from "../../store";
import shortenText from "../../utils/shortenText";
import DistanceWidget from "../DistanceWidget";
import { getDistance } from "geolib";
import StyledWidgetContainer from "../StyledWidgetContainer";

const StyledPreviewCard = styled.li`
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr / 150px;
  grid-template-rows: 2fr / 1rem;
  border-radius: 50px;
  transition: 0.15s;

  &:hover {
    background: #e2b8ec;
  }
`;

const StyledEventPreviewDate = styled.time`
  grid-column: 1;
  grid-row: 1 / 3;
  margin-left: 1rem;
`;

const StyledEventHeadline = styled.h4`
  grid-column: 2;
  grid-row: 1 / 3;
  text-align: center;
  text-overflow: ellipsis;
  width: 150px;
`;

export default function EventListPreview({ event }) {
  const { range, currentLocation, userLocation } = useFilterStore(
    (state) => state
  );
  const distance =
    userLocation.length > 0
      ? getDistance(
          { latitude: userLocation[0], longitude: userLocation[1] },
          {
            latitude: event.location.coordinates[0],
            longitude: event.location.coordinates[1],
          }
        )
      : null;
  const date = new Date(event.startDate);
  const formattedDate = new Intl.DateTimeFormat("de-DE").format(date);
  return (
    <>
      <StyledPreviewCard>
        <StyledEventPreviewDate dateTime={event.startDate} aria-label="date">
          {formattedDate}
        </StyledEventPreviewDate>
        <StyledEventHeadline aria-label={event.title}>
          {shortenText(event.title)}
        </StyledEventHeadline>
        <StyledWidgetContainer>
          {currentLocation && (
            <DistanceWidget range={range} distance={distance} />
          )}
        </StyledWidgetContainer>
      </StyledPreviewCard>
    </>
  );
}
