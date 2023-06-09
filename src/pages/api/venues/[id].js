import { getServerSession } from "next-auth/next";
import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const reviews = await Review.find({ parent: id });

    if (!reviews) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(reviews);
  }
  if (request.method === "POST") {
    if (!session) return response.status(401).json({ status: "Unauthorized" });
    try {
      const reviewData = request.body;
      const review = new Review(reviewData);
      await review.save();
      response.status(201).json({ status: "Review created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PUT") {
    if (!session.user.id === request.body.user_id) {
      return response.status(401).json({ status: "Unauthorized" });
    }
    const reviewToUpdate = await Review.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(reviewToUpdate);
  }
  if (request.method === "DELETE") {
    if (!session.user.id === request.body.user_id) {
      return response.status(401).json({ status: "Unauthorized" });
    }
    const reviewToDelete = await Review.findByIdAndDelete(id);
    response.status(200).json(reviewToDelete);
  }
}
