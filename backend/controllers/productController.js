import asyncHandler from "../middleware/asyncHandler";
import Product from "../models/productModel";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
