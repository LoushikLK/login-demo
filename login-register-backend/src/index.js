import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import router from "./routes/auth.router.js";

const app = express();

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://loushikgiri:3MjCqc53oqjjjCbF@cluster0.9drbf6j.mongodb.net/webappsolution?retryWrites=true&w=majority",
    {}
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());

app.use(express.json());

app.use("/api/", router);

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    res.status(400).json({
      message: err.message,
      status: "FAIL",
    });
  }
});

const PORT = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  res.send("Welcome to express");
});

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
