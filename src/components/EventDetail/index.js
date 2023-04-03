import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 98%;
  text-align: left;
  font-size: 0.7rem;
  padding: 0.5rem;
  margin: 0.1rem;
  position: sticky;
  border: 2px solid black;
  background: white;
`;

const StyledSection = styled.section`
  padding: 0.5rem;
  margin: 0.1rem;
  border: 2px solid black;
  width: 98%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
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

export default function EventDetail({ event }) {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const formattedStartDate = new Intl.DateTimeFormat("de-DE").format(startDate);
  const formattedEndDate = new Intl.DateTimeFormat("de-DE").format(endDate);
  return (
    <>
      <StyledHeader>
        <h1 aria-label={event.title}>{event.title}</h1>
      </StyledHeader>
      <StyledSection>
        <StyledTypeHeadline>#{event.type}</StyledTypeHeadline>
        <StyledDateSection>
          Date:
          <time aria-label="start date" dateTime={event.startDate}>
            <strong>{formattedStartDate}</strong>
          </time>
          -
          <time aria-label="end date" dateTime={event.endDate}>
            <strong>{formattedEndDate}</strong>
          </time>
        </StyledDateSection>
        <StyledTimeSection>
          <p>Start:</p>
          <time aria-label="start time" dateTime={event.startTime}>
            {event.startTime}
          </time>
          <p>End:</p>
          <time aria-label="end time" dateTime={event.endTime}>
            {event.endTime}
          </time>
        </StyledTimeSection>
        <StyledAddressSection>
          <p>Address:</p>
          <address>{event.location.address}</address>
        </StyledAddressSection>
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
