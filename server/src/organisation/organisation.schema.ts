import mongoose, { Schema } from "mongoose";

const orgSchema: Schema = new Schema({
  orgName: {
    type: String,
    required: true,
  },
  orgEmail: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
  certification: [
    {
      type: String,
      required: false,
    },
  ],
});

export default mongoose.model("Organisation", orgSchema);
