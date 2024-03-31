// import { useParams } from "react-router-dom";
import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
dotenv.config();
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
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

//   let { id } = useParams();
//   id = Number(id);
//   const product = products.find((p, index) => {
//     console.log("index: ", index);
//     console.log(index === id);
//     if (index === id) {
//       return true;
//     }
//     return false;
//   });
//   console.log("product: ", product);
