import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import { useFilterStore } from "../../store";
import { TheaterBig } from "../../utils/icons";
import BackLink from "../BackLink";
import BookmarkButton from "../BookmarkButton";
import DistanceWidget from "../DistanceWidget";
import EventList from "../EventList";
import LikeButton from "../LikeButton";
import LocationButton from "../LocationButton";
import ReviewSection from "../ReviewSection";
import Spinner from "../Spinner";
import StyledHeader from "../StyledHeader";
import StyledHeadline from "../StyledHeadline";
import StyledWidgetContainer from "../StyledWidgetContainer";
import VenueData from "../VenueData";

const StyledSection = styled.section`
  padding: 0.5rem;
  margin: 0.1rem;
  border: 2px solid black;
  width: 98%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0.5rem;
`;

const StyledAddressSection = styled.div`
  grid-column: 1 / 4;
  grid-row: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledDescription = styled.section`
  padding: 0.5rem;
  margin: 0.1rem;
  border: 2px solid black;
  width: 98%;
`;

const StyledFrame = styled.div`
  grid-column: span 4;
  grid-row: 1 / 3;
  margin-left: 1rem;
`;

const StyledImage = styled(Image)`
  border-radius: 12px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

export default function VenueDetail({
  venue,
  range,
  distance,
  currentLocation,
}) {
  const eventSort = useFilterStore((state) => state.eventSort);
  const { data, isLoading, error } = useSWR(
    `/api/events/events?venueId=${venue.id}&sort=${eventSort}&locale=*&countryCode=DE`
  );
  const venueImage = venue.images
    ? venue.images.find((image) => image.ratio === "16_9")
    : null;
  const venueImageUrl = venueImage ? venueImage.url : null;

  return (
    <>
      <StyledHeader>
        <BackLink />
        <StyledHeadline aria-label={venue.name}>{venue.name}</StyledHeadline>
        <LocationButton />
        <BookmarkButton />
      </StyledHeader>
      <StyledSection style={{ background: "#f0f0f0" }}>
        {venueImage ? (
          <StyledFrame>
            <StyledImage
              src={venueImageUrl}
              alt={venue.name}
              width={250}
              height={250 / (16 / 9)}
            />
          </StyledFrame>
        ) : (
          <TheaterBig />
        )}
        <VenueData venueId={venue.id} />
        <StyledAddressSection>
          <LikeButton id={venue.id} variant="detail" />
          <address aria-label="address">
            {venue.address.line1}, {venue.city.name}
          </address>
        </StyledAddressSection>
        <StyledWidgetContainer
          style={{
            gridColumn: "span 4",
            gridRow: 4,
          }}
        >
          {currentLocation && (
            <DistanceWidget distance={distance} range={range} />
          )}
        </StyledWidgetContainer>
      </StyledSection>
      <StyledDescription>
        {venue.social && (
          <>
            <h3>Social:</h3>
            <p aria-label="social">{venue.social.twitter.handle}</p>
          </>
        )}
        {venue.generalInfo && (
          <>
            <h3>Information:</h3>
            <p aria-label="information">{venue.generalInfo.generalRule}</p>
          </>
        )}
        <Link href={venue.url}>More</Link>
      </StyledDescription>
      <StyledDescription>
        <h3>Upcoming Events</h3>
      </StyledDescription>
      {isLoading ? (
        <Spinner />
      ) : error || !data._embedded ? (
        <p>No upcoming events.</p>
      ) : (
        <EventList events={data._embedded.events} />
      )}
      <StyledDescription>
        <h3>Reviews</h3>
        <ReviewSection venueId={venue.id} />
      </StyledDescription>
    </>
  );
}
