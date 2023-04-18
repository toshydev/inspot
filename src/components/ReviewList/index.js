import useSWR from "swr";
import StyledListContainer from "../StyledListContainer";
import Spinner from "../Spinner";
import ReviewCard from "../ReviewCard";

export default function ReviewList({ id }) {
  const reviews = useSWR(`/api/venues/${id}`);
  const { data, isLoading, error } = reviews;

  async function handleDeleteReview(id) {
    await fetch(id && `/api/venues/${id}`, {
      method: "DELETE",
    });
    reviews.mutate();
  }

  if (isLoading) return <Spinner />;
  if (error) return <>{error.status}</>;

  return (
    <StyledListContainer>
      {data && data.length > 0 ? (
        data.map((review) => {
          return (
            <ReviewCard
              key={review._id}
              review={review}
              onDeleteReview={handleDeleteReview}
            />
          );
        })
      ) : (
        <p>No reviews yet. Be the first to post.</p>
      )}
    </StyledListContainer>
  );
}
