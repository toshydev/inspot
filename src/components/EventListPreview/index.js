import { getDistance } from "geolib";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import shortenText from "../../utils/shortenText";
import DistanceWidget from "../DistanceWidget";
import StyledWidgetContainer from "../StyledWidgetContainer";
import TimeLeftWidget from "../TimeLeftWidget";
import Geohash from "latlon-geohash";

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
  const { range, currentLocation, location } = useFilterStore((state) => state);

  const date = new Date(
    event.dates.start.dateTime
      ? event.dates.start.dateTime
      : event.dates.start.localDate
  );
  const formattedDate = new Intl.DateTimeFormat("de-DE").format(date);

  useEffect(() => {
    const id = setInterval(() => {
      if (location) {
        const latLon = Geohash.decode(location);
        setDistance(
          getDistance(
            { latitude: latLon.lat, longitude: latLon.lon },
            {
              latitude: event._embedded.venues[0].location.latitude,
              longitude: event._embedded.venues[0].location.longitude,
            }
          )
        );
      }
    }, 5000);
    return () => clearInterval(id);
  }, [location, event]);

  return (
    <>
      <StyledPreviewCard>
        <StyledEventPreviewDate
          dateTime={event.dates.start.dateTime}
          aria-label="date"
        >
          {formattedDate}
        </StyledEventPreviewDate>
        <StyledEventHeadline aria-label={event.name}>
          {event.name}
        </StyledEventHeadline>
        <StyledWidgetContainer style={{ gridRow: "span 6" }}>
          {currentLocation && (
            <DistanceWidget range={range} distance={distance} />
          )}
          {date.getTime() > Date.now() && (
            <TimeLeftWidget
              startDate={date}
              startTime={event.dates.start.localTime}
            />
          )}
        </StyledWidgetContainer>
      </StyledPreviewCard>
    </>
  );
}
