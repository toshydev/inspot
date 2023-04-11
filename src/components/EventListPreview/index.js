import { getDistance } from "geolib";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import shortenText from "../../utils/shortenText";
import DistanceWidget from "../DistanceWidget";
import StyledWidgetContainer from "../StyledWidgetContainer";
import TimeLeftWidget from "../TimeLeftWidget";

const StyledPreviewCard = styled.li`
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr / 150px;
  border-radius: 12px;
  transition: 0.15s;

  &:hover {
    background: #e2b8ec;
  }
`;

const StyledEventPreviewDate = styled.time`
  grid-column: 1;
  grid-row: 1;
  margin-left: 1rem;
`;

const StyledEventHeadline = styled.h4`
  grid-column: 2;
  grid-row: 1;
  text-align: center;
  text-overflow: ellipsis;
  width: 150px;
`;

export default function EventListPreview({ event }) {
  const [distance, setDistance] = useState(0);
  const { range, currentLocation, userLocation } = useFilterStore(
    (state) => state
  );

  const date = new Date(event.startDate);
  const formattedDate = new Intl.DateTimeFormat("de-DE").format(date);

  useEffect(() => {
    userLocation.length > 0
      ? setDistance(
          getDistance(
            { latitude: userLocation[0], longitude: userLocation[1] },
            {
              latitude: event.location.coordinates[0],
              longitude: event.location.coordinates[1],
            }
          )
        )
      : setDistance(null);
  }, [userLocation, event]);

  return (
    <>
      <StyledPreviewCard>
        <StyledEventPreviewDate dateTime={event.startDate} aria-label="date">
          {formattedDate}
        </StyledEventPreviewDate>
        <StyledEventHeadline aria-label={event.title}>
          {shortenText(event.title)}
        </StyledEventHeadline>
        <StyledWidgetContainer style={{ gridRow: "span 5" }}>
          {currentLocation && (
            <DistanceWidget range={range} distance={distance} />
          )}
          {date.getTime() > Date.now() && (
            <TimeLeftWidget
              startDate={event.startDate}
              startTime={event.startTime}
            />
          )}
        </StyledWidgetContainer>
      </StyledPreviewCard>
    </>
  );
}
