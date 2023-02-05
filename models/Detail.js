const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

let DetailSchema = mongoose.Schema(
  {
    id: {
      type: ObjectId,
    },
    gigtype: {
      type: String,
      required: true,
    },
    gignumber: {
      type: Number,
      default: 0,
    },
    amount: {
      type: Number,
      default: 0,
    },
    start: {
      type: Date,
      default: Date.now(),
    },
    end: {
      type: Date,
      default: Date.now()+24*60*60,
    },
    status: {
      type: String,
      required: true,
    },
    contactcsm: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    proof: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("detail", DetailSchema);