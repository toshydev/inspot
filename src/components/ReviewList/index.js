import useSWR from "swr";
import ReviewCard from "../ReviewCard";
import Spinner from "../Spinner";
import StyledListContainer from "../StyledListContainer";

export default function ReviewList({ venueId }) {
  const reviews = useSWR(`/api/venues/${venueId}`);
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
        data
          .slice()
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((review) => {
            return (
              <ReviewCard
                key={review._id}
                review={review}
                onDeleteReview={handleDeleteReview}
              />
            );
          })
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
      ) : (
        <p>No reviews yet. Be the first to post.</p>
      )}
    </StyledListContainer>
  );
}
