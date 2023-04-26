import Image from "next/image";
import { useState } from "react";
import useDistance from "../../hooks/useDistance";
import { useFilterStore } from "../../store";
import getImage from "../../utils/getImage";
import { TheaterBig } from "../../utils/icons";
import DistanceWidget from "../DistanceWidget";
import StyledCard from "../StyledCard";
import StyledCardHeadline from "../StyledCardHeadline";
import StyledSection from "../StyledSection";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function VenueListPreview({ venue }) {
  const [distance, setDistance] = useState(0);
  const range = useFilterStore((state) => state.range);
  const location = useFilterStore((state) => state.location);

  const image = venue.images ? getImage(venue.images) : null;
  const { width } = useWindowDimensions();
  const imageHeight = parseInt(width / (16 / 9));

  useDistance(location, venue, setDistance);

  return (
    <>
      <StyledCard
        variant="preview"
        imageHeight={width && imageHeight ? imageHeight : 108}
      >
        <StyledSection variant="heading preview">
          <StyledCardHeadline aria-label={venue.name}>
            {venue.name}
          </StyledCardHeadline>
        </StyledSection>
        <StyledSection variant="picture preview">
          {image && width ? (
            <Image
              src={image.url}
              alt={venue.name}
              width={width}
              height={imageHeight}
            />
          ) : (
            <TheaterBig />
          )}
        </StyledSection>
        <StyledSection variant="city preview">
          <aside aria-label={venue.city.name}>
            <strong>{venue.city.name}</strong>
          </aside>
        </StyledSection>
        <StyledSection variant="widget preview venue">
          <DistanceWidget range={range} distance={distance} />
        </StyledSection>
      </StyledCard>
    </>
  );
}
