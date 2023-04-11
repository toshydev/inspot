import Link from "next/link";
import styled from "styled-components";
import { ArrowBackBig, PlaceBig } from "../../utils/icons";
import StyledHeader from "../StyledHeader";
import StyledHeadline from "../StyledHeadline";
import StyledIconLink from "../StyledIconLink";
import DistanceWidget from "../DistanceWidget";
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
  const date = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const formattedStartDate = new Intl.DateTimeFormat("de-DE").format(date);
  const formattedEndDate = new Intl.DateTimeFormat("de-DE").format(endDate);

  return (
    <>
      <StyledHeader>
        <StyledIconLink href="/events/" aria-label="go to events list">
          <ArrowBackBig />
        </StyledIconLink>
        <StyledHeadline aria-label={event.title}>{event.title}</StyledHeadline>
        <StyledIconLink href="/location" aria-label="go to locations list">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      <StyledSection style={{ background: "#f0f0f0" }}>
        <StyledTypeHeadline>#{event.type}</StyledTypeHeadline>
        <StyledDateSection>
          Date:
          <time aria-label="start date" dateTime={formattedStartDate}>
            <strong>{formattedStartDate}</strong>
          </time>
          -
          <time aria-label="end date" dateTime={formattedEndDate}>
            <strong>{formattedEndDate}</strong>
          </time>
        </StyledDateSection>
        <StyledTimeSection>
          <p>Start:</p>
          <p aria-label="start time">{event.startTime}</p>
          <p>End:</p>
          <p aria-label="end time">{event.endTime}</p>
        </StyledTimeSection>
        <StyledAddressSection>
          <p>Address:</p>
          <address aria-label="address">{event.location.address}</address>
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
              startDate={event.startDate}
              startTime={event.startTime}
            />
          )}
        </StyledWidgetContainer>
      </StyledSection>
      <StyledDescription>
        <h3>Description:</h3>
        <p aria-label="description">{event.description}</p>
        <h3>Information:</h3>
        <p aria-label="information">{event.information}</p>
        <Link href="/events">More</Link>
      </StyledDescription>
    </>
  );
}
