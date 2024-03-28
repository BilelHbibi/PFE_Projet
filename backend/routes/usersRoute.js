import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleeware from "../middlwares/authMiddleeware.js";

// new user registeration
router.post("/register", async (req, res) => {
  try {
    //check if user already exist
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error("L'utilisateur existe déjà");
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //save user
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "Utilisateur créé avec succès",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});




// user login
router.post("/login", async (req, res) => {
  try {
    //check if user exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    //if user is active or not
    if(user.status !== "active"){
      throw new Error("the user account is blocked , please contact admin")
    }

    //compare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      throw new Error("Mot de passe invalide");
    }

    //crete and asign token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    //send response
    res.send({
      success: true,
      message: "Utilisateur connecté avec succès",
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get current user
router.get("/get-current-user", authMiddleeware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get all users
router.get("/get-users", authMiddleeware, async (req, res) => {
  try {
    const users = await User.find();
    res.send({
      success: true,
      message: "User fetched successfully",
      data: users,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//update user status
router.put("/update-user-status/:id", authMiddleeware, async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id,req.body)
    res.send({
      success: true,
      message: "User status updated successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
