import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import DistanceWidget from "../DistanceWidget";
import StyledCardHeadline from "../StyledCardHeadline";
import StyledPreviewCard from "../StyledPreviewCard";
import StyledWidgetContainer from "../StyledWidgetContainer";
import TimeLeftWidget from "../TimeLeftWidget";

const StyledEventPreviewDate = styled.time`
  grid-column: 1;
  grid-row: 1;
  margin-left: 1rem;
`;

export default function EventListPreview({ event }) {
  const [distance, setDistance] = useState(0);
  const range = useFilterStore((state) => state.range);
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);

  const date = new Date(
    event.dates.start.dateTime
      ? event.dates.start.dateTime
      : event.dates.start.localDate
  );
  const formattedDate = new Intl.DateTimeFormat("de-DE").format(date);

  useEffect(() => {
    const id = setInterval(() => {
      if (location && event._embedded.venues[0].location) {
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
        <StyledCardHeadline aria-label={event.name}>
          {event.name}
        </StyledCardHeadline>
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
