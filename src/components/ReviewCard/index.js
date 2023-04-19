import { useEffect, useState } from "react";
import styled from "styled-components";
import useSWRMutation from "swr/mutation";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import Spinner from "../Spinner";

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

export default function ReviewCard({ review, onDeleteReview, onEditSuccess }) {
  const [isEdit, setIsEdit] = useState(false);

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
    reviewData.attended = event.target.elements.attended.checked;
    setIsEdit(false);

    await trigger(reviewData);
    onEdit();
  }

  if (isMutating) return <Spinner />;

  return (
    <>
      {isEdit ? (
        <form onSubmit={handleEditReview}>
          <EditButton onEdit={() => setIsEdit(!isEdit)} />
          <fieldset>
            <legend>Edit review</legend>
            <label htmlFor="user">Name: </label>
            <input id="user" name="user" defaultValue={review.user}></input>
            <fieldset>
              <input type="radio" id="one" value={1} name="rating" />
              <label htmlFor="one">1</label>
              <input id="two" type="radio" value={2} name="rating" />
              <label htmlFor="two">2</label>
              <input id="three" type="radio" value={3} name="rating" />
              <label htmlFor="three">3</label>
              <input id="four" type="radio" value={4} name="rating" />
              <label htmlFor="four">4</label>
              <input id="five" type="radio" value={5} name="rating" />
              <label htmlFor="five">5</label>
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
        </form>
      ) : (
        <StyledReviewCard>
          <DeleteButton id={review._id} onDelete={onDeleteReview} />
          <EditButton onEdit={() => setIsEdit(!isEdit)} />
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
          {review.date && (
            <time
              dateTime={`${new Intl.DateTimeFormat("de-DE").format(
                new Date(review.date)
              )}`}
            >
              {new Intl.DateTimeFormat("de-DE").format(new Date(review.date))}
            </time>
          )}
        </StyledReviewCard>
      )}
    </>
  );
}
