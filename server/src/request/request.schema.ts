import mongoose, { Schema } from "mongoose";

const requestSchema: Schema = new Schema({
  certName: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["REQUESTED", "APPROVED"],
    default: "REQUESTED",
  },
});

export default mongoose.model("Request", requestSchema);
