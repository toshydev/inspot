import mongoose, { Types } from "mongoose";

interface IReview {
  parent: string;
  title: string;
  text: string;
  rating: number;
  attended: boolean;
  date: Date;
  user_id: Types.ObjectId;
}

const { Schema } = mongoose;

const reviewSchema = new Schema<IReview>({
  parent: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  attended: { type: Boolean, required: true },
  date: { type: Date, required: true },
  user_id: { type: Schema.Types.ObjectId, required: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
