import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const reviews = await Review.find({ parent: id });

    if (!reviews) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(reviews);
  }
}
