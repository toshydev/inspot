import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: Date, required: true },
  image: { type: Date, required: true },
  saved: { type: Schema.Types.Mixed },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
