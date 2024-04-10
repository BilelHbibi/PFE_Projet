import mongoose from "mongoose";

const notificationShema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    onClick: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    read: {
      type: Boolean,
      default: false,
    },
    data: mongoose.Schema.Types.Mixed,
    status: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);

const notifications = mongoose.model("notifications", notificationShema);

export default notifications;
