import ReviewList from "../ReviewList";
import StyledContent from "../StyledContent";

export default function ReviewSection(data) {
  return (
    <StyledContent>
      <ReviewList reviews={data} />
    </StyledContent>
  );
}
