import { getDistance } from "geolib";
import Geohash from "latlon-geohash";
import { useEffect, useState } from "react";
import { useFilterStore } from "../../store";
import DistanceWidget from "../DistanceWidget";
import StyledCardHeadline from "../StyledCardHeadline";
import StyledPreviewCard from "../StyledPreviewCard";
import StyledSubtitle from "../StyledSubtitle";
import StyledWidgetContainer from "../StyledWidgetContainer";

export default function VenueListPreview({ venue }) {
  const [distance, setDistance] = useState(0);
  const range = useFilterStore((state) => state.range);
  const currentLocation = useFilterStore((state) => state.currentLocation);
  const location = useFilterStore((state) => state.location);

  useEffect(() => {
    const id = setInterval(() => {
      if (location) {
        const latLon = Geohash.decode(location);
        setDistance(
          getDistance(
            { latitude: latLon.lat, longitude: latLon.lon },
            {
              latitude: venue.location.latitude,
              longitude: venue.location.longitude,
            }
          )
        );
      }
    }, 5000);
    return () => clearInterval(id);
  }, [location, venue]);

  return (
    <StyledPreviewCard>
      <StyledCardHeadline aria-label={venue.name}>
        {venue.name}
      </StyledCardHeadline>
      <StyledSubtitle
        aria-label={venue.city.name}
        style={{ marginRight: "auto" }}
      >
        {venue.city.name}
      </StyledSubtitle>
      <StyledWidgetContainer>
        {currentLocation && (
          <DistanceWidget range={range} distance={distance} />
        )}
      </StyledWidgetContainer>
    </StyledPreviewCard>
  );
}
