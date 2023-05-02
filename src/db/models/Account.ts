import mongoose, { Types } from "mongoose";
import "./User";

interface IAccount {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
}

const { Schema } = mongoose;

const accountSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});
const Account =
  mongoose.models.Account || mongoose.model("Account", accountSchema);

export default Account;
