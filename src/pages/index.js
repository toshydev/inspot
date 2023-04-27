import styled from "styled-components";
import useSWR from "swr";
import BookmarkLink from "../components/BookmarkLink";
import ListView from "../components/ListView";
import LocationLink from "../components/LocationLink";
import Spinner from "../components/Spinner";
import StyledCardHeadline from "../components/StyledCardHeadline";
import StyledContainer from "../components/StyledContainer";
import StyledContent from "../components/StyledContent";
import StyledHeader from "../components/StyledHeader";
import StyledSection from "../components/StyledSection";
import { useFilterStore } from "../store";

const StyledLogoHeadline = styled.h1`
  font-family: var(--logoFont);
  color: var(--accent);
`;
export default function HomePage() {
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);
  const { data, isLoading, error } = useSWR(
    `/api/suggest?resource=events&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&locale=*&countryCode=DE`
  );

  return (
    <>
      <StyledHeader>
        <StyledLogoHeadline variant="header">inSpot</StyledLogoHeadline>
        <StyledSection variant="links">
          <LocationLink />
          <BookmarkLink />
        </StyledSection>
      </StyledHeader>
      <StyledContainer
        variant="flex"
        flex="column"
        align="center"
        margin="4rem 0 0 0"
      >
        <StyledCardHeadline variant="spotlight">Recommended</StyledCardHeadline>
        <StyledContent variant="spotlight">
          {isLoading ? (
            <Spinner />
          ) : error ? (
            <p>No events found. Please adjust filter.</p>
          ) : (
            <ListView type="events" data={data._embedded.events} />
          )}
        </StyledContent>
      </StyledContainer>
    </>
  );
}
