const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    attributes: [
      {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "attributes",
      },
    ],
  },
  { timestamps: true }
);

const ProductType = mongoose.model("productType", ProductTypeSchema);

module.exports = ProductType;
