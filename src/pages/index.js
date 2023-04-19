import styled from "styled-components";
import useSWR from "swr";
import BookmarkLink from "../components/BookmarkLink";
import LocationLink from "../components/LocationLink";
import Spinner from "../components/Spinner";
import SpotlightList from "../components/SpotlightList";
import StyledContent from "../components/StyledContent";
import StyledHeader from "../components/StyledHeader";
import { useFilterStore } from "../store";

const StyledLogoHeadline = styled.h1`
  font-family: var(--logoFont);
  color: var(--accent);
`;
export default function HomePage() {
  const eventsPage = useFilterStore((state) => state.eventsPage);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);
  const { data, isLoading, error } = useSWR(
    `/api/events?sort=random&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&classificationName=arts&locale=*&countryCode=DE&page=${eventsPage}`
  );

  return (
    <>
      <StyledHeader>
        <StyledLogoHeadline>inSpot</StyledLogoHeadline>
        <LocationLink />
        <BookmarkLink />
      </StyledHeader>
      <StyledContent>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p>No events found. Please adjust filter.</p>
        ) : (
          <SpotlightList events={data._embedded.events} />
        )}
      </StyledContent>
    </>
  );
}
