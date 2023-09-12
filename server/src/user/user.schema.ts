import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  facialUUID: {
    type: String,
    required: true,
  },
  certificates: [
    {
      type: String,
      required: false,
    },
  ],
});

export default mongoose.model("User", userSchema);
