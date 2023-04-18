import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  parent: { type: String, required: true },
  user: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  attended: { type: Boolean, required: true },
  timestamp: { type: Date, required: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
