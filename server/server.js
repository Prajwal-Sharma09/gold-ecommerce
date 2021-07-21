import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import proudcts from "./data/products.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.json("api is running..");
});

app.get("/api/products", (req, res) => {
  res.json(proudcts);
});

app.get("/api/products/:id", (req, res) => {
  const data = proudcts.find((p) => p._id === req.params.id);
  res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server is running on ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
