import useSWR from "swr";
import getRating from "../../utils/getRating";
import Spinner from "../Spinner";
import StyledContainer from "../StyledContainer";
import StyledDivider from "../StyledDivider";

export default function VenueData({ venueId }) {
  const { data, isLoading, error } = useSWR(
    venueId && `/api/venues/${venueId}`
  );
  const rating = data && data.length > 0 ? getRating(data) : 0;

  if (isLoading) return <Spinner />;
  if (error || !data) return <>{error.status}</>;
  return (
    <StyledContainer
      variant="flex"
      flex="row"
      text="center"
      justify="center"
      gap="1.5rem"
    >
      <StyledContainer>
        <p>
         <span role="img" aria-label="emoji that indicates a rating">
           ⭐️
         </span>
        </p>
        <p>
          <strong>{rating ? rating : 0}</strong>
        </p>
      </StyledContainer>
      <StyledDivider variant="vertical" />
      <StyledContainer>
        <p>
          <strong>{data.length}</strong>
        </p>
        <p>Reviews</p>
      </StyledContainer>
    </StyledContainer>
  );
}
