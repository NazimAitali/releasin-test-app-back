const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttributesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  attributeValue: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "attributesValue",
  },
});

const Attributes = mongoose.model("attributes", AttributesSchema);

module.exports = Attributes;
