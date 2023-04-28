import dbConnect from "../../../db/connect";
import Review from "../../../db/models/Review";
import User from "../../../db/models/User";
import Account from "../../../db/models/Account";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const reviews = await Review.find({ user: id });

    if (!reviews) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(reviews);
  }
  if (request.method === "DELETE") {
    const reviewsToDelete = await Review.deleteMany({ user_id: id });
    const userToDelete = await User.findByIdAndDelete(id);
    const accountToDelete = await Account.findOneAndDelete({ userId: id });
    response
      .status(200)
      .json({ Deleted: userToDelete, reviewsToDelete, accountToDelete });
  }
}
