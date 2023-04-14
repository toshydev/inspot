import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFilterStore } from "../../store";
import DistanceWidget from "../DistanceWidget";
import StyledCardHeadline from "../StyledCardHeadline";
import StyledWidgetContainer from "../StyledWidgetContainer";
import TimeLeftWidget from "../TimeLeftWidget";
import StyledSubtitle from "../StyledSubtitle";
import Image from "next/image";

const StyledSpotlightCard = styled.div`
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: space-around;
  border-radius: 35px;
  transition: 0.15s;

  &:hover {
    background: #e2b8ec;
  }
`;

export default function SpotlightListPreview({ event }) {
  const [distance, setDistance] = useState(0);
  const range = useFilterStore((state) => state.range);
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);

  const imageSource = event.images.find((image) => {
    return image.height < 250 && image.ratio === "3_2";
  });
  const imageWidth = imageSource.width;
  const imageHeight = imageSource.height;
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
      <StyledSpotlightCard>
        <StyledSubtitle style={{ gridColumn: "2 / 5", gridRow: "1" }}>
          {event._embedded.venues[0].name}
        </StyledSubtitle>
        <StyledCardHeadline
          style={{
            gridColumn: "span 4",
            gridRow: "3",
            fontSize: "1.2rem",
            width: "100%",
            height: "100%",
          }}
          aria-label={event.name}
        >
          {event.name}
        </StyledCardHeadline>
        <Image src={imageURL} alt={event.name} width={imageWidth} height={imageHeight}/>
        <StyledWidgetContainer style={{ gridColumn: "2 / 4", gridRow: "2" }}>
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
      </StyledSpotlightCard>
    </>
  );
}
