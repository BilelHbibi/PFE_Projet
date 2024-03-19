import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";
import authMiddleeware from "../middlwares/authMiddleeware.js";
import cloudinary from "../config/cloudinaryConfig.js";
import multer from "multer";


// add a new product
router.post("/add-product", authMiddleeware, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send({
      success: true,
      message: "Product added successfuly",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

//get all products
router.get("/get-products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.send({
      success: true,
      products,
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
      message: "Product updated successfully",
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
      message: "Product deleted successfully",
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
      const result = await cloudinary.uploader.upload(req.file.path,{
        folder:"MarcPlace"
      });

      const productId = req.body.productId;
      await Product.findByIdAndUpdate(productId, {
        $push: { images: result.secure_url },
      });
      res.send({
        success: true,
        message: "Image upladed successfully",
        result,
      });
    } catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
  }
);

export default router;
