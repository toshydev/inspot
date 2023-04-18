import useSWR from "swr";

export default function ReviewForm({ id }) {
  const reviews = useSWR(id && `/api/venues/${id}`);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData);
    reviewData.date = new Date();
    reviewData.parent = id;
    reviewData.attended = event.target.elements.attended.checked;
    console.log("Form data: ", reviewData);

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
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Write a review</legend>
        <label htmlFor="user">Name: </label>
        <input id="user" name="user"></input>
        <fieldset>
          <label id="rating">Rating: </label>
          <input
            type="radio"
            value={2}
            aria-labelledby="rating"
            name="rating"
          />
          <input
            type="radio"
            value={3}
            aria-labelledby="rating"
            name="rating"
          />
          <input
            type="radio"
            value={4}
            aria-labelledby="rating"
            name="rating"
          />
          <input
            type="radio"
            value={5}
            aria-labelledby="rating"
            name="rating"
          />
          <input
            type="radio"
            value={1}
            aria-labelledby="rating"
            name="rating"
          />
        </fieldset>
        <label htmlFor="attended">Attended? </label>
        <input type="checkbox" id="attended" name="attended" />
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title"></input>
        <label htmlFor="text">Comment: </label>
        <textarea id="text" name="text"></textarea>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
