import styled from "styled-components";
import useSWR from "swr";
import { useFilterStore } from "../../store";
import { TheaterBig } from "../../utils/icons";
import BackButton from "../BackButton";
import BookmarkLink from "../BookmarkLink";
import DistanceWidget from "../DistanceWidget";
import FavoriteButton from "../FavoriteButton";
import ListView from "../ListView";
import LocationLink from "../LocationLink";
import ReviewSection from "../ReviewSection";
import Spinner from "../Spinner";
import StyledCard from "../StyledCard";
import StyledContainer from "../StyledContainer";
import StyledDivider from "../StyledDivider";
import StyledHeader from "../StyledHeader";
import StyledHeadline from "../StyledHeadline";
import StyledImage from "../StyledImage";
import StyledLink from "../StyledLink";
import StyledSection from "../StyledSection";
import VenueData from "../VenueData";

const StyledDescription = styled.section`
  padding: 0.5rem;
  margin: 0.1rem;
  border: 2px solid black;
  width: 98%;
`;

export default function VenueDetail({ venue, range, distance }) {
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
        <BackButton />
        <StyledHeadline aria-label={venue.name}>{venue.name}</StyledHeadline>
        <LocationLink />
        <BookmarkLink />
      </StyledHeader>
      <StyledCard variant="detail">
        <StyledSection variant="picture">
          {venueImage ? (
            <StyledImage
              src={venueImageUrl}
              alt={venue.name}
              width={150}
              height={150 / (16 / 9)}
            />
          ) : (
            <TheaterBig />
          )}
        </StyledSection>
        <StyledSection variant="rating">
          <StyledLink href="#reviews" aria-label="go to reviews">
            <VenueData venueId={venue.id} />
          </StyledLink>
        </StyledSection>
        <StyledSection variant="numbers">
          <StyledLink href="#reviews" aria-label="go to reviews">
            <StyledContainer variant="flex" flex="column" text="center">
              <p>
                <strong>
                  {isLoading || error || !data._embedded
                    ? 0
                    : data._embedded.events.length}
                </strong>
              </p>
              <p>Events</p>
            </StyledContainer>
          </StyledLink>
        </StyledSection>
        <StyledSection variant="address">
          <address aria-label="address">
            {venue.address.line1}, {venue.city.name}
          </address>
        </StyledSection>
        <StyledSection variant="favorite">
          <FavoriteButton id={venue.id} />
        </StyledSection>
        <StyledSection variant="widget">
          <DistanceWidget distance={distance} range={range} />
        </StyledSection>
        <StyledSection variant="more">
          <StyledContainer variant="flex" flex="row" justify="center">
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
            <StyledLink href={venue.url}>More</StyledLink>
          </StyledContainer>
        </StyledSection>
      </StyledCard>
      <StyledDivider variant="horizontal" />
      <StyledDescription>
        <h3 id="events">Upcoming Events</h3>
      </StyledDescription>
      {isLoading ? (
        <Spinner />
      ) : error || !data._embedded ? (
        <p>No upcoming events.</p>
      ) : (
        <ListView type="events" data={data._embedded.events} />
      )}
      <StyledContainer variant="flex" flex="column" align="center" width="100%">
        <ReviewSection venueId={venue.id} />
      </StyledContainer>
    </>
  );
}
