import { useState } from "react";
import useSWRMutation from "swr/mutation";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import Spinner from "../Spinner";
import StyledForm from "../StyledForm";
import StyledListItem from "../StyledListItem";
import StyledCard from "../StyledCard";
import StyledSection from "../StyledSection";
import StarRating from "../StarRating";

export default function ReviewCard({ review, onDeleteReview, onEditSuccess }) {
  const [isEdit, setIsEdit] = useState(false);
  const [rating, setRating] = useState(0);

  const { trigger, isMutating } = useSWRMutation(
    review._id && `/api/venues/${review._id}`,
    sendRequest
  );

  async function sendRequest(url, { arg }) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  async function handleEditReview(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData);
    reviewData.date = new Date();
    reviewData.rating = rating;
    reviewData.attended = event.target.elements.attended.checked;
    setIsEdit(false);

    await trigger(reviewData);
    onEditSuccess();
  }

  if (isMutating) return <Spinner />;

  return (
    <>
      {isEdit ? (
        <StyledForm onSubmit={handleEditReview} variant="edit">
          <EditButton onEdit={() => setIsEdit(!isEdit)} />
          <fieldset>
            <legend>Edit review</legend>
            <label htmlFor="user">Name: </label>
            <input id="user" name="user" defaultValue={review.user}></input>
            <fieldset>
              <fieldset>
                <legend>Rating</legend>
                <StarRating onSetRating={setRating} />
              </fieldset>
            </fieldset>
            <label htmlFor="attended">Attended? </label>
            <input type="checkbox" id="attended" name="attended" />
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={review.title}
            />
            <label htmlFor="text">Comment: </label>
            <textarea id="text" name="text" defaultValue={review.text} />
          </fieldset>
          <button type="submit">Done</button>
        </StyledForm>
      ) : (
        <StyledListItem>
          <StyledCard variant="review">
            <StyledSection variant="review buttons">
              <EditButton onEdit={() => setIsEdit(!isEdit)} />
              <DeleteButton id={review._id} onDelete={onDeleteReview} />
            </StyledSection>
            <StyledSection variant="review user">
              {review.user && <address>{review.user}</address>}
            </StyledSection>
            <StyledSection variant="review title">
              {review.title && <h4>Title: {review.title}</h4>}
            </StyledSection>
            <StyledSection variant="review rating">
              {review.rating && (
                <p>
                  Rating: <strong>{review.rating}</strong>
                </p>
              )}
            </StyledSection>
            <StyledSection variant="review text">
              {review.text && <p>{review.text}</p>}
            </StyledSection>
            <StyledSection variant="review attended">
              {review.attended && (
                <p>
                  Attended:{" "}
                  <span
                    role="image"
                    aria-label="checkmark emoji that indicates if the review is atteded"
                  >
                    ✅
                  </span>
                </p>
              )}
            </StyledSection>
            <StyledSection variant="review date">
              {review.date && (
                <time
                  dateTime={`${new Intl.DateTimeFormat("de-DE").format(
                    new Date(review.date)
                  )}`}
                >
                  {new Intl.DateTimeFormat("de-DE").format(
                    new Date(review.date)
                  )}
                </time>
              )}
            </StyledSection>
          </StyledCard>
        </StyledListItem>
      )}
    </>
  );
}
