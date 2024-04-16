import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";
import authMiddleeware from "../middlwares/authMiddleeware.js";
import cloudinary from "../config/cloudinaryConfig.js";
import multer from "multer";
import User from "../models/userModel.js";
import Notification from "../models/notificationModel.js";

// add a new product
router.post("/add-product", authMiddleeware, async (req, res) => {
  try {
    const userId = req.body.userId; // L'ID de l'utilisateur est déjà ajouté par le middleware
    const user = await User.findById(userId); // Chercher l'utilisateur pour obtenir son nom
    
    if (!user) {
      return res.status(404).send({ success: false, message: "User not found" });
    }

    const newProduct = new Product(req.body);
    await newProduct.save();

    // send notification to admis
    const admins = await User.find({ role: "admin" });
    admins.forEach(async (admin) => {
      const newNotification = new Notification({
        user: admin._id,
        message: `Nouveau produit ajouté par ${user.name}`,
        title: "Nouveau Produit",
        onClick: `/admin`,
        read: false,
      });
      await newNotification.save();
    });


    res.send({
      success: true,
      message: "Produit ajouté avec succès",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});


//get product by id
router.get("/get-product-by-id/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("seller");
    res.send({
      success: true,
      data: product,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get all products
router.post("/get-products", async (req, res) => {
  try {
    const { seller, category = [], age = [], status } = req.body;
    let filters = {};
    if (seller) {
      filters.seller = seller;
    }
    if (status) {
      filters.status = status;
    }

    //filter by category
    if (category.length > 0) {
      filters.category = { $in: category };
    }

    //filter by age
    if (age.length > 0) {
      age.forEach((item) => {
        const fromAge = item.split("-")[0];
        const toAge = item.split("-")[1];
        filters.age = { $gte: fromAge, $lte: toAge };
      });
    }

    const products = await Product.find(filters)
      .populate("seller")
      .sort({ createdAt: -1 });
    res.send({
      success: true,
      data: products,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//edit product
router.put("/edit-product/:id", authMiddleeware, async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: "Produit mis à jour avec succès",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//delete product
router.delete("/delete-product/:id", authMiddleeware, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send({
      success: true,
      message: "Produit supprimé avec succès",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get image from pc
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

router.post(
  "/upload-image-to-product",
  authMiddleeware,
  multer({ storage: storage }).single("file"),
  async (req, res) => {
    try {
      //upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "Marcplace",
      });

      const productId = req.body.productId;
      await Product.findByIdAndUpdate(productId, {
        $push: { images: result.secure_url },
      });
      res.send({
        success: true,
        message: "Image téléchargée avec succès",
        data: result.secure_url,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  }
);

//update product status
router.put("/update-product-status/:id", authMiddleeware, async (req, res) => {
  try {
    const { status } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      status,
    });

    // //send notification to seller
    const newNotification = new Notification({
      user: updatedProduct.seller,
      message: `Votre produit ${updatedProduct.name} a été ${status}`,
      title: "Statut du Produit Mis à Jour",
      onClick: `/profile`,
      read: false,
      data:updatedProduct,
      status: `${status}`,
    });
    await newNotification.save()

    
    res.send({
      success: true,
      message: "Statut du produit mis à jour avec succès",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

export default router;
