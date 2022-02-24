const AttributesValue = require("../models/attributeValue.model");
const AssignedAttributes = require("../models/assignedAttributes.model");
const Attributes = require("../models/attributes.model");
const ProductType = require("../models/productType.model");
const Product = require("../models/product.model");

/**Delete AttributesValue */
const deleteAttributesValue = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ msg: "ID MISSING, PLEASE CHECK YOUR REQUEST" });
    const result = await AttributesValue.deleteOne({ _id: id });
    if (!result) return res.status(400).json({ msg: "ERROR NO RESULT" });
    return res.status(200).json({ msg: "DELET SUCCEFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
/**Delete AssignedAttributes */
const deleteAssignedAttributes = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ msg: "ID MISSING, PLEASE CHECK YOUR REQUEST" });
    const result = await AssignedAttributes.deleteOne({ _id: id });
    if (!result) return res.status(400).json({ msg: "ERROR NO RESULT" });
    return res.status(200).json({ msg: "DELET SUCCEFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
/**Delete Attributes */
const deleteAttributes = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ msg: "ID MISSING, PLEASE CHECK YOUR REQUEST" });
    const result = await Attributes.deleteOne({ _id: id });
    if (!result) return res.status(400).json({ msg: "ERROR NO RESULT" });
    return res.status(200).json({ msg: "DELET SUCCEFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
/**Delete ProductType */
const deleteProductType = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ msg: "ID MISSING, PLEASE CHECK YOUR REQUEST" });
    const result = await ProductType.deleteOne({ _id: id });
    if (!result) return res.status(400).json({ msg: "ERROR NO RESULT" });
    return res.status(200).json({ msg: "DELET SUCCEFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
/**Delete Product */
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res
        .status(400)
        .json({ msg: "ID MISSING, PLEASE CHECK YOUR REQUEST" });
    const result = await Product.deleteOne({ _id: id });
    if (!result) return res.status(400).json({ msg: "ERROR NO RESULT" });
    return res.status(200).json({ msg: "DELET SUCCEFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
module.exports = {
  deleteProduct,
  deleteAttributesValue,
  deleteAssignedAttributes,
  deleteAttributes,
  deleteProductType,
};
