import mongoose, { Types } from "mongoose";

interface IUser {
  _id: Types.ObjectId;
  name: string;
  email?: string;
  image?: string;
}

const { Schema } = mongoose;

const userSchema = new Schema<IUser>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
