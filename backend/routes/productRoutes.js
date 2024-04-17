import express from "express";
import mongoose from "mongoose";

import asyncHandler from "../middleware/asyncHandler.js";
// import products from "../data/products.js";
import Product from "../models/productModel.js";

const router = express.Router();

// Route to get all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// Route to get a single product by ID
// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       return res.json(product);
//     }
//     res.status(404).json({ message: "Product not found" });
//   })
// );

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const productId = req.params.id;

    // Validate if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    // If the ID is valid, attempt to find the product
    const product = await Product.findById(mongoose.Types.ObjectId(productId));

    if (product) {
      return res.json(product);
    } else {
      res.status(404);
      throw new Error("Resource not found");
    }
  })
);

export default router;
