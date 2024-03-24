import express from "express";
const router = express.Router();
import Bids from "../models/bidModel.js";
import authMiddleeware from "../middlwares/authMiddleeware.js";

//place a new bid
router.post("/place-new-bid", authMiddleeware, async (req, res) => {
  try {
    const newBid = new Bids(req.body);
    await newBid.save();
    res.send({
      success: true,
      message: "Bid placed successfuly",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get all products
router.post("/get-all-bids", authMiddleeware, async (req, res) => {
  try {
    const { product, seller } = req.body;
    let filters = {};
    if (product) {
      filters.product = product;
    }
    if (seller) {
      filters.seller = seller;
    }
    const bids = await Bids.find(filters)
      .populate("product")
      .populate("buyer")
      .populate("seller");
    res.send({
      success: true,
      data: bids,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default router;