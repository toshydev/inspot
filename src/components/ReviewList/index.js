import ReviewCard from "../ReviewCard";
import StyledList from "../StyledList";

export default function ReviewList({ reviews, onDeleteReview, onEditSuccess }) {
  return (
    <StyledList>
      {reviews
        .slice()
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((review) => {
          return (
            <ReviewCard
              key={review._id}
              review={review}
              onDeleteReview={onDeleteReview}
              onEditSuccess={onEditSuccess}
            />
          );
        })
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )}
    </StyledList>
  );
}
