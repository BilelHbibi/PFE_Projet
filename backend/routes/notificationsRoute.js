import express from "express";
const router = express.Router();
import Notification from "../models/notificationModel.js";
import authMiddleeware from "../middlwares/authMiddleeware.js";

//add a notification
router.post("/notify", authMiddleeware, async (req, res) => {
  try {
    const newNotification = new Notification(req.body);
    await newNotification.save();
    res.send({
      success: true,
      message: "Notification ajoutée avec succès",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get all notifications by user
router.get("/get-all-notifications", authMiddleeware, async (req, res) => {
  try {
    const notifications = await Notification.find({
      user: req.body.userId,
    }).sort({ createdAt: -1 });
    res.send({
      success: true,
      data: notifications,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//delete notifications
router.delete("/delete-notification/:id", authMiddleeware, async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      message: "Notification supprimée avec succès",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
    
  }
});

//read all notifications by user
router.put("/read-all-notifications", authMiddleeware, async (req, res) => {
  try {
    const notifications = await Notification.updateMany(
      {
        user: req.body.userId,
        read: false,
      },
      { $set: { read: true } }
    );
    res.send({
      success: true,
      message:"Toutes les notifications lues avec succès"
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
