import useSWR from "swr";
import Spinner from "../Spinner";
import styled from "styled-components";
import getRating from "../../utils/getRating";

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

export default function VenueData({ id }) {
  const { data, isLoading, error } = useSWR(id && `/api/venues/${id}`);
  const rating = data && data.length > 0 ? getRating(data) : 0;

  if (isLoading) return <Spinner />;
  if (error || !data) return <>{error.status}</>;
  return (
    <StyledContainer>
      <p>Rating:</p>
      <p>{rating ? rating : 0}</p>
    </StyledContainer>
  );
}
