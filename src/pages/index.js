import styled from "styled-components";
import useSWR from "swr";
import SpotlightList from "../components/SpotlightList";
import StyledContent from "../components/StyledContent";
import StyledHeader from "../components/StyledHeader";
import StyledIconLink from "../components/StyledIconLink";
import { useFilterStore } from "../store";
import { PlaceBig } from "../utils/icons";

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

  return (
    <>
      <StyledHeader>
        <StyledLogoHeadline>inSpot</StyledLogoHeadline>
        <StyledIconLink href="/location">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      <StyledContent>
        {data?._embedded ? (
          <SpotlightList events={data._embedded.events} />
        ) : (
          <p>No events found. Adjust filter.</p>
        )}
      </StyledContent>
    </>
  );
}
