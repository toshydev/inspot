import mongoose from "mongoose";

const { Schema } = mongoose;

const venueSchema = new Schema({
  id: { type: String, required: true },
  rating: { type: Float32Array, required: true },
  reviews: { type: Array, required: true },
});

const Venue = mongoose.models.Venue || mongoose.model("Venue", venueSchema);

export default Venue;
