import express from "express";
const router = express.Router();
import Bids from "../models/bidModel.js";
import AcceptedBids from "../models/acceptedBidModal.js";
import authMiddleeware from "../middlwares/authMiddleeware.js";

//place a new bid
router.post("/place-new-bid", authMiddleeware, async (req, res) => {
  try {
    const newBid = new Bids(req.body);
    await newBid.save();
    res.send({
      success: true,
      message: "Offre placée avec succès",
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
    const { product, seller, buyer } = req.body;
    let filters = {};
    if (product) {
      filters.product = product;
    }
    if (seller) {
      filters.seller = seller;
    }
    if (buyer) {
      filters.buyer = buyer;
    }
    const bids = await Bids.find(filters)
      .populate("product")
      .populate("buyer")
      .populate("seller")
      .sort({ createdAt: -1 });
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

// In your route file
router.post("/accept-bid/:bidId", authMiddleeware, async (req, res) => {
  try {
    const { bidId } = req.params;
    const bid = await Bids.findById(bidId);

    if (!bid) {
      return res
        .status(404)
        .send({ success: false, message: "Offre non trouvée" });
    }

    if (bid.status !== "pending") {
      return res
        .status(400)
        .send({ success: false, message: "Cette offre a déjà été traitée" });
    }

    // Update the status in the original Bids model
    bid.status = "accepted";
    await bid.save();

    // Save a record in the AcceptedBids model
    const acceptedBid = new AcceptedBids({
      originalBid: bid._id,
      product: bid.product,
      seller: bid.seller,
      buyer: bid.buyer,
      bidAmount: bid.bidAmount,
      message: bid.message,
      mobile: bid.mobile,
    });

    await acceptedBid.save();

    // TODO: Add any additional logic here, such as notifying the bidder

    res.send({ success: true, message: "Offre acceptée avec succès" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

// Fetch bid details by ID
router.get("/bid-details/:bidId", authMiddleeware, async (req, res) => {
  try {
    const { bidId } = req.params;
    const bid = await Bids.findById(bidId)
      .populate("product", "name description")
      .populate("buyer", "name email")
      .populate("seller", "name email");

    if (!bid) {
      return res.status(404).send({ success: false, message: "Bid not found" });
    }

    res.send({ success: true, data: bid });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});


router.delete("/reject-and-delete-bid/:bidId", authMiddleeware, async (req, res) => {
  try {
      const { bidId } = req.params;
      const bid = await Bids.findByIdAndDelete(bidId);

      

      res.send({ success: true, message: "Bid rejected and deleted successfully" });
  } catch (error) {
      res.status(500).send({ success: false, message: error.message });
  }
});

export default router;
