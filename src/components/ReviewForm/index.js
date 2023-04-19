export default function ReviewForm({ venueId, onCreateReview }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData);
    reviewData.date = new Date();
    reviewData.parent = venueId;
    reviewData.attended = event.target.elements.attended.checked;

    onCreateReview(venueId, reviewData);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Write a review</legend>
        <label htmlFor="user">Name: </label>
        <input id="user" name="user"></input>
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
        <input type="text" id="title" name="title"></input>
        <label htmlFor="text">Comment: </label>
        <textarea id="text" name="text"></textarea>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}
