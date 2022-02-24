const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttributesValueSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  boolean: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const AttributesValue = mongoose.model(
  "attributesValue",
  AttributesValueSchema
);

module.exports = AttributesValue;
