import useSWR from "swr";
import StyledContent from "../../components/StyledContent";
import StyledHeader from "../../components/StyledHeader";
import StyledIconLink from "../../components/StyledIconLink";
import VenueFilter from "../../components/VenueFilter";
import VenueList from "../../components/VenueList";
import { useFilterStore } from "../../store";
import { PlaceBig } from "../../utils/icons";

export default function VenueListPage() {
  const venuesPage = useFilterStore((state) => state.venuesPage);
  const venueSort = useFilterStore((state) => state.venueSort);
  const venueKeywords = useFilterStore((state) => state.venueKeywords);
  const location = useFilterStore((state) => state.location);
  const range = useFilterStore((state) => state.range);

  const { data } = useSWR(
    `/api/venues/venues?sort=${venueSort}&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&keyword=${venueKeywords}&locale=*&countryCode=DE&page=${venuesPage}`
  );
  console.log(data);

  return (
    <>
      <StyledHeader>
        <h1>Venues</h1>
        <StyledIconLink href="/location" aria-label="go to location page">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      <StyledContent>
        <VenueFilter />
        {data?._embedded ? (
          <VenueList venues={data._embedded.venues} />
        ) : (
          <p>No venues found. Adjust filter.</p>
        )}
      </StyledContent>
    </>
  );
}
