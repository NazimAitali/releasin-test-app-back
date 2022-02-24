const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssignedAttributesSchema = new Schema({
  attributeValue: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "attributesValue",
  },
});

const AssignedAttributes = mongoose.model(
  "assignedAttributes",
  AssignedAttributesSchema
);

module.exports = AssignedAttributes;
