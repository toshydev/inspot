import dbConnect from "../../../db/connect";
import Venue from "../../../db/models/Venue";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const venue = await Venue.findOne({ id: id });

    if (!venue) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(venue);
  }
}
