import useSWR from "swr";
import EventFilter from "../../components/EventFilter";
import EventList from "../../components/EventList";
import StyledHeader from "../../components/StyledHeader";
import StyledIconLink from "../../components/StyledIconLink";
import { useFilterStore } from "../../store";
import { PlaceBig } from "../../utils/icons";

export default function EventListPage() {
  const { page, sorting, resource, keywords, segments, location, range } =
    useFilterStore((state) => state);
  const { data } = useSWR(
    `/api/events/${resource}?sort=${sorting}&geoPoint=${location}&radius=${
      range / 1000
    }&unit=km&classificationName=${segments
      .filter((segment) => segment.isActive)
      .map(
        (segment) => segment.name
      )}&keyword=${keywords}&locale=*&countryCode=DE&page=${page}`
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
