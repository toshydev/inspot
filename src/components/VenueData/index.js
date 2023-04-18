import useSWR from "swr";
import Spinner from "../Spinner";
import styled from "styled-components";

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

  console.log(data);

  if (isLoading) return <Spinner />;
  if (error || !data)
    return (
      <StyledContainer>
        <p>Rating:</p>
        <p>{0}</p>
      </StyledContainer>
    );
  return (
    <StyledContainer>
      <p>Rating:</p>
      <p>{data.rating ? data.rating : 0}</p>
    </StyledContainer>
  );
}
