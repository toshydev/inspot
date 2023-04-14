import useSWR from "swr";
import StyledHeader from "../../components/StyledHeader";
import StyledIconLink from "../../components/StyledIconLink";
import VenueList from "../../components/VenueList";
import { useFilterStore } from "../../store";
import { PlaceBig } from "../../utils/icons";
import VenueFilter from "../../components/VenueFilter";

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

  return (
    <>
      <StyledHeader>
        <h1>Venues</h1>
        <StyledIconLink href="/location">
          <PlaceBig />
        </StyledIconLink>
      </StyledHeader>
      <VenueFilter />
      {data?._embedded ? (
        <VenueList venues={data._embedded.venues} />
      ) : (
        <p>No venues found. Adjust filter.</p>
      )}
    </>
  );
}
