import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import DistanceWidget from "../DistanceWidget";
import StyledCard from "../StyledCard";
import StyledCardHeadline from "../StyledCardHeadline";
import StyledSubtitle from "../StyledSubtitle";
import StyledWidgetContainer from "../StyledWidgetContainer";
import TimeLeftWidget from "../TimeLeftWidget";

const StyledSpotlightCard = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: space-around;
  border-radius: 35px;
  transition: 0.15s;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  &:hover {
    background: #e2b8ec;
  }
`;

const StyledFrame = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  margin-left: 1rem;
`;

const StyledThumbnail = styled(Image)`
  border-radius: 12px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const StyledCardSection = styled.section`
  background: #f0f0f0;
  border-radius: 12px;
  margin: 0.5rem;
  padding: 0.5rem 0 2.5rem 0;
`;

export default function SpotlightListPreview({ event }) {
  const [distance, setDistance] = useState(0);
  const range = useFilterStore((state) => state.range);
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);

  const imageSource = event.images.find((image) => image.ratio === "4_3");
  const imageURL = imageSource.url;

  const date = new Date(
    event.dates.start.dateTime
      ? event.dates.start.dateTime
      : event.dates.start.localDate
  );

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
      <StyledCard variant="preview">
        <StyledSubtitle
          style={{ gridColumn: "3 / 6", gridRow: "1" }}
          aria-label={event._embedded.venues[0].name}
        >
          {event._embedded.venues[0].name}
        </StyledSubtitle>
        <StyledCardHeadline
          style={{
            gridColumn: "span 5",
            gridRow: "3",
            width: "90%",
            height: "100%",
          }}
          aria-label={event.name}
        >
          {event.name}
        </StyledCardHeadline>
        <StyledFrame>
          <StyledThumbnail
            src={imageURL}
            alt={event.name}
            width={120}
            height={80}
          />
        </StyledFrame>
        <StyledCardSection style={{ gridColumn: "3 / 6", gridRow: "2" }}>
          <StyledWidgetContainer>
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
        </StyledCardSection>
      </StyledCard>
    </>
  );
}
