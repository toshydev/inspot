import styled from "styled-components";
import StyledListContainer from "../StyledListContainer";

const StyledReviewCard = styled.li`
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  justify-content: space-around;
  border-radius: 12px;
  transition: 0.15s;
`;

export default function ReviewList(reviews) {
  return (
    <StyledListContainer>
      {reviews ? (
        reviews.map((review) => {
          return (
            <StyledReviewCard key={review._id}>
              {review.user && <address>{review.user}</address>}
              {review.title && <h4>Title: {review.title}</h4>}
              {review.rating && (
                <p>
                  Rating: <strong>{review.rating}</strong>
                </p>
              )}
              {review.text && <p>{review.text}</p>}
              {review.attended && (
                <p>
                  Attended: <span>✅</span>
                </p>
              )}
              {review.timestamp && (
                <small>
                  Posted:{" "}
                  {new Intl.DateTimeFormat("de-DE").format(
                    new Date(review.timestamp)
                  )}
                </small>
              )}
            </StyledReviewCard>
          );
        })
      ) : (
        <p>No reviews yet. Be the first to post.</p>
      )}
    </StyledListContainer>
  );
}
