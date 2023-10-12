// models/ActiveUser.js
// const mongoose = require('mongoose');
import mongoose from "mongoose";

const activeUserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userLocation: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

activeUserSchema.index({ userLocation: "2dsphere" });

export default mongoose.model("ActiveUser", activeUserSchema);
