import mongoose from "mongoose";

import { User } from "../interfaces/User";

const UserModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    salt: {
      type: String,
      required: true,
    },

    files: [String],
  },
  { timestamps: true },
);

export default mongoose.model<User & mongoose.Document>("User", UserModel);
