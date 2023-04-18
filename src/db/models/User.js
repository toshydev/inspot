import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  created: { type: Date, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
