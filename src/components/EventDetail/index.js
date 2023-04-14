import Link from "next/link";
import styled from "styled-components";
import { PlaceBig } from "../../utils/icons";
import BackLink from "../BackLink";
import DistanceWidget from "../DistanceWidget";
import StyledHeader from "../StyledHeader";
import StyledHeadline from "../StyledHeadline";
import StyledIconLink from "../StyledIconLink";
import StyledWidgetContainer from "../StyledWidgetContainer";
import TimeLeftWidget from "../TimeLeftWidget";

const StyledSection = styled.section`
  padding: 0.5rem;
  margin: 0.1rem;
  border: 2px solid black;
  width: 98%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0.5rem;
`;

const StyledTypeHeadline = styled.h4`
  grid-column: 1;
  grid-row: 1;
`;

const StyledDateSection = styled.div`
  grid-column: 2 / 4;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledTimeSection = styled.div`
  grid-column: 1 / 4;
  grid-row: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export default function EventDetail({
  event,
  range,
  distance,
  currentLocation,
}) {
  const date = new Date(
    event.dates.start.dateTime
      ? event.dates.start.dateTime
      : event.dates.start.localDate
  );
  const formattedStartDate = new Intl.DateTimeFormat("de-DE").format(date);

  return (
    <>
      <StyledHeader>
        <BackLink />
        <StyledHeadline aria-label={event.name}>{event.name}</StyledHeadline>
        <StyledIconLink href="/location" aria-label="go to locations list">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      <StyledSection style={{ background: "#f0f0f0" }}>
        <StyledTypeHeadline>
          {
            event.classifications.find((segment) => segment.primary === true)
              .genre.name
          }
        </StyledTypeHeadline>
        <StyledDateSection>
          Date:
          <time aria-label="start date" dateTime={formattedStartDate}>
            <strong>{formattedStartDate}</strong>
          </time>
        </StyledDateSection>
        <StyledTimeSection>
          <p>Start:</p>
          <p aria-label="start time">{event.dates.start.localTime}</p>
        </StyledTimeSection>
        <StyledAddressSection>
          <p>Address:</p>
          <address aria-label="address">
            {event._embedded.venues[0].address.line1},
            {event._embedded.venues[0].address.city}
          </address>
        </StyledAddressSection>
        <StyledWidgetContainer
          style={{
            gridColumn: "span 4",
            gridRow: 4,
            marginTop: "1rem",
          }}
        >
          {currentLocation && (
            <DistanceWidget distance={distance} range={range} />
          )}
          {date.getTime() > Date.now() && (
            <TimeLeftWidget
              startDate={date}
              startTime={event.dates.start.localTime}
            />
          )}
        </StyledWidgetContainer>
      </StyledSection>
      <StyledDescription>
        <h3>Description:</h3>
        <p aria-label="description">{event.description}</p>
        <h3>Information:</h3>
        <p aria-label="information">{event.information}</p>
        <Link href={event.url}>More</Link>
      </StyledDescription>
    </>
  );
}
