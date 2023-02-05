const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

let GraphSchema = mongoose.Schema(
  {
    id: {
      type: ObjectId,
    },
    date: {
      type: String,
      required: true,
    },
    experts: {
      type: Number,
      default: 0,
    },
    fullfillment: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("graph", GraphSchema);