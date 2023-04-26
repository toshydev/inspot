import { useSession } from "next-auth/react";
import useSWR from "swr";
import ReviewForm from "../ReviewForm";
import ReviewList from "../ReviewList";
import Spinner from "../Spinner";

export default function ReviewSection({ venueId }) {
  const { data: session } = useSession();
  const reviews = useSWR(`/api/venues/${venueId}`);
  const { data, isLoading, error, mutate } = reviews;

  async function handleCreateReview(id, reviewData) {
    const response = await fetch(id && `/api/venues/${id}`, {
      method: "POST",
      body: JSON.stringify(reviewData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
      reviews.mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleDeleteReview(id) {
    await fetch(id && `/api/venues/${id}`, {
      method: "DELETE",
    });
    reviews.mutate();
  }

  return (
    <>
      {session ? (
        <ReviewForm venueId={venueId} onCreateReview={handleCreateReview} />
      ) : (
        <p>Please log in to write reviews.</p>
      )}

      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p>No reviews yet. Be the first to post.</p>
      ) : data.length > 0 ? (
        <ReviewList
          reviews={data}
          onDeleteReview={handleDeleteReview}
          onEditSuccess={mutate}
        />
      ) : null}
    </>
  );
}
