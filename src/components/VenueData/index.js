import styled from "styled-components";
import useSWR from "swr";
import getRating from "../../utils/getRating";
import Spinner from "../Spinner";

const StyledContainer = styled.div`
  background: hotpink;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 4rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledBox = styled.div`
  background: deepskyblue;
  border-radius: 50px;
  width: 6rem;
  height: 3rem;
  position: absolute;
  top: 5rem;
  right: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function VenueData({ venueId }) {
  const { data, isLoading, error } = useSWR(
    venueId && `/api/venues/${venueId}`
  );
  const rating = data && data.length > 0 ? getRating(data) : 0;

  if (isLoading) return <Spinner />;
  if (error || !data) return <>{error.status}</>;
  return (
    <>
      <StyledBox>
        <p>Reviews:</p>
        <p>
          <strong>{data.length}</strong>
        </p>
      </StyledBox>
      <StyledContainer>
        <p>Rating:</p>
        <p>
          <strong>{rating ? rating : 0}</strong>
        </p>
      </StyledContainer>
    </>
  );
}
