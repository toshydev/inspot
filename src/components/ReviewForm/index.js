import { useState } from "react";
import StarRating from "../StarRating";
import StyledForm from "../StyledForm";

export default function ReviewForm({ venueId, onCreateReview }) {
  const [rating, setRating] = useState(0);
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData);
    reviewData.date = new Date();
    reviewData.rating = rating;
    reviewData.parent = venueId;
    reviewData.attended = event.target.elements.attended.checked;

    onCreateReview(venueId, reviewData);

    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <legend>Write a review</legend>
        <label htmlFor="user">Name: </label>
        <input id="user" name="user"></input>
        <fieldset>
          <legend>Rating</legend>
          <StarRating onSetRating={setRating} />
        </fieldset>
        <label htmlFor="attended">Attended? </label>
        <input
          className="attended"
          type="checkbox"
          id="attended"
          name="attended"
        />
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title"></input>
        <label htmlFor="text">Comment: </label>
        <textarea id="text" name="text" />
      </fieldset>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}
