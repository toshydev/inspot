import ReviewList from "../ReviewList";
import ReviewForm from "../ReviewForm";

export default function ReviewSection({ id }) {
  return (
    <>
      <ReviewForm id={id} />
      <ReviewList id={id} />
    </>
  );
}
