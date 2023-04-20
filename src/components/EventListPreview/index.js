import Image from "next/image";
import { useState } from "react";
import useDistance from "../../hooks/useDistance";
import { useFilterStore } from "../../store";
import getDatetime from "../../utils/getDatetime";
import getImage from "../../utils/getImage";
import { Picture } from "../../utils/icons";
import DistanceWidget from "../DistanceWidget";
import StyledCard from "../StyledCard";
import StyledCardHeadline from "../StyledCardHeadline";
import StyledSection from "../StyledSection";
import StyledWidgetContainer from "../StyledWidgetContainer";
import TimeLeftWidget from "../TimeLeftWidget";

export default function EventListPreview({ event }) {
  const [distance, setDistance] = useState();
  const range = useFilterStore((state) => state.range);
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);

  const { date, formattedDate } = getDatetime(event);
  const image = getImage(event.images);

  const windowWidth = window.innerWidth;

  useDistance(location, event, setDistance);

  return (
    <>
      <StyledCard variant="preview">
        <StyledSection variant="datetime preview">
          <strong>
            <time dateTime={date} aria-label="date">
              {formattedDate}
            </time>
          </strong>
        </StyledSection>
        <StyledSection variant="picture preview">
          {image ? (
            <Image
              src={image.url}
              width={windowWidth}
              height={windowWidth / (16 / 9)}
              alt={event.name}
            />
          ) : (
            <Picture />
          )}
        </StyledSection>
        <StyledSection variant="heading preview">
          <StyledCardHeadline aria-label={event.name}>
            {event.name}
          </StyledCardHeadline>
        </StyledSection>
        <StyledSection variant="widget preview">
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
        </StyledSection>
      </StyledCard>
    </>
  );
}
