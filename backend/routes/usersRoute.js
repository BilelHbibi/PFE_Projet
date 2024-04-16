import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleeware from "../middlwares/authMiddleeware.js";
import sendConfirmationEmail from "../config/nodemailer.js";

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

    //Activation code
    const characters =
      "123456789azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN";
    let activationCode = "";
    for (let i = 0; i < 25; i++) {
      activationCode +=
        characters[Math.floor(Math.random() * characters.length)];
    }

    //save user
    const newUser = new User({
      ...req.body,
      activationCode: activationCode, // Add the activation code
    });
    await newUser.save();
    sendConfirmationEmail(newUser.email, newUser.activationCode);
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
    if (user.status !== "active") {
      throw new Error("the user account is blocked , please contact admin");
    }

    //compare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (user && validPassword && !user.isActive && user.role !== "admin") {
      throw new Error("Verifier votre boite email pour lactivation");
    }

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
      message: "Utilisateur récupéré avec succès",
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
    const users = await User.find({ role: { $ne: "admin" } });
    res.send({
      success: true,
      message: "Utilisateur récupéré avec succès",
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
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: "Statut de l'utilisateur mis à jour avec succès",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

router.post("/verifyuser/:activationCode", async (req, res) => {
  try {
    // Find the user with the given activation code
    const user = await User.findOne({ activationCode: req.params.activationCode });

    // Check if the user was not found
    if (!user) {
      return res.status(404).send({
        message: "Ce code d'activation est faut", // This activation code is incorrect
      });
    }

    // If the user is found, activate the user
    user.isActive = true;

    // Save the updated user object
    await user.save();

    // Send a success response
    res.send({
      message: "Ce code d'activation est success", // This activation code is successful
    });

  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).send({
      message: error.message,
    });
  }
});

export default router;
