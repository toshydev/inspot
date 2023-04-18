import ReviewList from "../ReviewList";
import ReviewForm from "../ReviewForm";

export default function ReviewSection({ venueId }) {
  return (
    <>
      <ReviewForm venueId={venueId} />
      <ReviewList venueId={venueId} />
    </>
  );
}
