import styled from "styled-components";
import StyledHeader from "../components/StyledHeader";
import { PlaceBig } from "../utils/icons";
import StyledIconLink from "../components/StyledIconLink";
import { useFilterStore } from "../store";
import useSWR from "swr";
import SpotlightList from "../components/SpotlightList";

const StyledLogoHeadline = styled.h1`
  font-family: var(--logoFont);
  color: var(--accent);
`;

export default function HomePage() {
  const eventsPage = useFilterStore((state) => state.eventsPage);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const { data } = useSWR(
    `/api/events/events?sort=random&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&classificationName=arts&locale=*&countryCode=DE&page=${eventsPage}`
  );

  console.log(data);

  return (
    <>
      <StyledHeader>
        <StyledLogoHeadline>inSpot</StyledLogoHeadline>
        <StyledIconLink href="/location">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      {data?._embedded ? (
        <SpotlightList events={data._embedded.events} />
      ) : (
        <p>No events found. Adjust filter.</p>
      )}
    </>
  );
}

/* import useSWR from "swr";
import EventFilter from "../../components/EventFilter";
import EventList from "../../components/EventList";
import StyledHeader from "../../components/StyledHeader";
import StyledIconLink from "../../components/StyledIconLink";
import { useFilterStore } from "../../store";
import { PlaceBig } from "../../utils/icons";

export default function EventListPage() {
  const eventsPage = useFilterStore((state) => state.eventsPage);
  const eventSort = useFilterStore((state) => state.eventSort);
  const eventKeywords = useFilterStore((state) => state.eventKeywords);
  const segments = useFilterStore((state) => state.segments);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const { data } = useSWR(
    `/api/events/events?sort=${eventSort}&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&classificationName=${segments
      .filter((segment) => segment.isActive)
      .map(
        (segment) => segment.name
      )}&keyword=${eventKeywords}&locale=*&countryCode=DE&page=${eventsPage}`
  );

  return (
    <>
      <StyledHeader>
        <h1>Explore</h1>
        <StyledIconLink href="/location">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      <EventFilter />
      {data?._embedded ? (
        <EventList events={data._embedded.events} />
      ) : (
        <p>No events found. Adjust filter.</p>
      )}
    </>
  );
}
 */
