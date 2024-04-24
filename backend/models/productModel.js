import mongoose from "mongoose";

const productShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    etat: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
    }, 
    billAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    warrantyAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    accessoriesAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    boxAvailable: {
      type: Boolean,
      required: true,
      default: false,
    },
    showBidsOnProductPage: {
      type: Boolean,
      default: false,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productShema);

export default Product;
