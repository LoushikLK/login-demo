import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: String,
    phoneNumber: String,
    country: String,
    address: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const userModel = model("User", userSchema);
