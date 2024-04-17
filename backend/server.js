// import { useParams } from "react-router-dom";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
// import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";
const port = 5000;
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/products", productRoutes);

// app.get("/api/products/:id", (req, res) => {
//   const productId = req.params.id;
//   const product = products.find((p) => p.id === productId);
//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ message: "Product not found" });
//   }
// });

app.listen(port, () => console.log(`Server running on port ${port}`));
