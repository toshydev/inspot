import getDatetime from "../../utils/getDatetime";
import { Picture } from "../../utils/icons";
import BackButton from "../BackButton";
import BookmarkLink from "../BookmarkLink";
import DistanceWidget from "../DistanceWidget";
import FavoriteButton from "../FavoriteButton";
import LocationLink from "../LocationLink";
import StyledCard from "../StyledCard";
import StyledContainer from "../StyledContainer";
import StyledHeader from "../StyledHeader";
import StyledHeadline from "../StyledHeadline";
import StyledImage from "../StyledImage";
import StyledLink from "../StyledLink";
import StyledSection from "../StyledSection";
import TimeLeftWidget from "../TimeLeftWidget";

export default function EventDetail({ event, range, distance }) {
  const { date, formattedDate } = getDatetime(event);
  const eventImage = event.images
    ? event.images.find((image) => image.ratio === "16_9")
    : null;
  const eventImageUrl = eventImage ? eventImage.url : null;

  return (
    <>
      <StyledHeader>
        <BackButton />
        <StyledHeadline aria-label={event.name}>{event.name}</StyledHeadline>
        <LocationLink />
        <BookmarkLink />
      </StyledHeader>
      <StyledCard variant="detail">
        <StyledSection variant="picture">
          {eventImage ? (
            <StyledImage
              src={eventImageUrl}
              alt={event.name}
              width={150}
              height={150 / (16 / 9)}
            />
          ) : (
            <Picture />
          )}
        </StyledSection>
        <StyledSection variant="favorite">
          <FavoriteButton id={event.id} />
        </StyledSection>
        <StyledSection variant="address">
          <address aria-label="address">
            {event._embedded.venues[0].address.line1},{" "}
            {event._embedded.venues[0].address.city}
          </address>
        </StyledSection>
        <StyledSection variant="widget">
          <DistanceWidget distance={distance} range={range} />
          {date.getTime() > Date.now() && (
            <TimeLeftWidget
              startDate={date}
              startTime={event.dates.start.localTime}
            />
          )}
        </StyledSection>
        <StyledSection variant="rating">
          <h4>
            {
              event.classifications.find((segment) => segment.primary === true)
                .genre.name
            }
          </h4>
        </StyledSection>
        <StyledSection variant="numbers">
          <time aria-label="start date" dateTime={formattedDate}>
            <strong>{formattedDate}</strong>
          </time>
          <p aria-label="start time">{event.dates.start.localTime}</p>
        </StyledSection>
        <StyledSection variant="more">
          <StyledContainer variant="flex" flex="row" justify="center">
            <StyledLink href={event.url}>More</StyledLink>
          </StyledContainer>
        </StyledSection>
      </StyledCard>
    </>
  );
}
