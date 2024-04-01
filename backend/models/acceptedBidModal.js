// AcceptedBidModel.js

import mongoose from "mongoose";

const acceptedBidSchema = new mongoose.Schema({
  originalBid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bids",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  bidAmount: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  acceptedAt: {
    type: Date,
    default: Date.now,
  },
  // Add any other fields you find necessary
}, {
  timestamps: true,
});

const AcceptedBids = mongoose.model("acceptedBids", acceptedBidSchema);

export default AcceptedBids;
