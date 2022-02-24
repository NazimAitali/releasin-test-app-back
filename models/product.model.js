const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: String,
    productType: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "productType",
    },
    assignedAttributes: [
      {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "assignedAttributes",
      },
    ],
  },
  { timestamps: true }
);

const Products = mongoose.model("products ", ProductSchema);

module.exports = Products;
