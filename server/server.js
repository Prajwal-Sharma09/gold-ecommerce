const express = require("express");
const proudcts = require("./data/products");
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

app.listen(5000, console.log("server is running on port 5000.."));
