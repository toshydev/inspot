import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const reviews = await Review.find({ parent: id });
    console.log(reviews)

    if (!reviews) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(reviews);
  }
  if (request.method === "POST") {
    try {
      const reviewData = request.body;
      const review = new Review(reviewData);
      await review.save();
      response.status(201).json({ status: "Review created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PUT") {
    const reviewToUpdate = await Review.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(reviewToUpdate);
  }
  if (request.method === "DELETE") {
    const reviewToDelete = await Review.findByIdAndDelete(id);
    response.status(200).json(reviewToDelete);
  }
}
