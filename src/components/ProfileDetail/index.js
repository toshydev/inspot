import useSWR from "swr";
import { useFilterStore } from "../../store";
import { getNextDay, getPreviousDay } from "../../utils/getStartEndDates";
import { Person } from "../../utils/icons";
import ListView from "../ListView";
import Spinner from "../Spinner";
import StyledCard from "../StyledCard";
import StyledCardHeadline from "../StyledCardHeadline";
import StyledContainer from "../StyledContainer";
import StyledImage from "../StyledImage";
import StyledSection from "../StyledSection";

export default function ProfileDetail({ user }) {
  const savedEvents = useFilterStore((state) => state.savedEvents);
  const savedVenues = useFilterStore((state) => state.savedVenues);
  const reviews = useSWR(`/api/user/${user.id}`);

  const startDate = getPreviousDay();
  const endDate = getNextDay();
  const { data, isLoading, error } = useSWR(
    savedEvents.length > 0 &&
      `/api/events?id=${savedEvents}&sort=date,asc&locale=*&countryCode=DE&startDate=${startDate}&endDateTime=${endDate}`
  );
  return (
    <>
      <StyledCard variant="profile">
        <StyledSection variant="picture">
          {user.image ? (
            <StyledSection variant="avatar big">
              <StyledImage
                variant="avatar"
                src={user.image}
                width={50}
                height={50}
                alt="avatar"
              />
            </StyledSection>
          ) : (
            <Person />
          )}
        </StyledSection>
        <StyledSection variant="rating">
          <p>{reviews && (reviews.data?.length ? reviews.data.length : 0)}</p>
          <p>Reviews</p>
        </StyledSection>
        <StyledSection variant="numbers">
          <StyledContainer variant="flex" flex="column" text="center">
            <p>
              <strong>
                {savedEvents.length > 0 || savedVenues.length > 0
                  ? savedEvents.length + savedVenues.length
                  : 0}
              </strong>
            </p>
            <h3>Saved</h3>
          </StyledContainer>
        </StyledSection>
      </StyledCard>
      <StyledContainer variant="flex" flex="column" align="center">
        <StyledCardHeadline variant="spotlight">
          Upcoming Events
        </StyledCardHeadline>
        {isLoading ? (
          <Spinner />
        ) : error || !data || !data._embedded ? (
          <p>You have no saved events.</p>
        ) : (
          <ListView type="events" data={data._embedded.events} />
        )}
      </StyledContainer>
    </>
  );
}
