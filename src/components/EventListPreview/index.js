import Image from "next/image";
import { useState } from "react";
import useDistance from "../../hooks/useDistance";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useFilterStore } from "../../store";
import getDatetime from "../../utils/getDatetime";
import getImage from "../../utils/getImage";
import { Picture } from "../../utils/icons";
import DistanceWidget from "../DistanceWidget";
import StyledCard from "../StyledCard";
import StyledCardHeadline from "../StyledCardHeadline";
import StyledSection from "../StyledSection";
import TimeLeftWidget from "../TimeLeftWidget";

export default function EventListPreview({ event }) {
  const [distance, setDistance] = useState();
  const range = useFilterStore((state) => state.range);
  const location = useFilterStore((state) => state.location);

  const { date, formattedDate } = getDatetime(event);
  const image = getImage(event.images);
  const { width } = useWindowDimensions();
  const imageHeight = parseInt(width / (16 / 9));

  useDistance(location, event, setDistance, "event");

  return (
    <>
      <StyledCard
        variant="preview"
        imageHeight={width && imageHeight ? imageHeight : 108}
      >
        <StyledSection variant="datetime preview">
          <strong>
            <time dateTime={date} aria-label="date">
              {formattedDate}
            </time>
          </strong>
        </StyledSection>
        <StyledSection variant="picture preview">
          {image && width ? (
            <Image
              src={image.url}
              alt={event.name}
              width={width}
              height={imageHeight}
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
          <DistanceWidget range={range} distance={distance} />
          <TimeLeftWidget
            startDate={date}
            startTime={event.dates.start.localTime}
          />
        </StyledSection>
      </StyledCard>
    </>
  );
}
