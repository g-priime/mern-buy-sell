const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
      ref: "User",
    },
    category: {
      type: String,
      required: true,
      ref: "Category",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    price: {
      type: String,
      required: [true, "Please add a price"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    image: { data: Buffer, contentType: String },
    required: false,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", itemSchema);
