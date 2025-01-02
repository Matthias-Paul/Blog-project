import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT;
const MONGO = process.env.MONGO;
const app = express();

mongoose
  .connect(MONGO)
  .then(() => console.log("Mongo DB connected successfully"))
  .catch((error) => console.log("MongoDB connection error:", +error.message));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("App is running on port:", +PORT);
});
