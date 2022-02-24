const AttributesValue = require("../models/attributeValue.model");
const AssignedAttributes = require("../models/assignedAttributes.model");
const Attributes = require("../models/attributes.model");
const ProductType = require("../models/productType.model");
const Product = require("../models/product.model");
/**create AttributeValue */

const createAttributeValue = async (req, res) => {
  try {
    const { name, boolean, date } = req.body;
    const AttributeValueObj = {
      name: name,
      boolean: boolean,
      date: date,
    };
    if (!name || !boolean || !date)
      return res
        .status(400)
        .json({ msg: "INFORMATION (val) MISSING, PLEASE CHECK YOUR REQUEST" });
    const newAttributeValue = new AttributesValue(AttributeValueObj);
    const result = await newAttributeValue.save();
    if (!result)
      return res
        .status(400)
        .json({ msg: "INFORMATION MISSING, PLEASE CHECK YOUR REQUEST" });
    res.status(201).json({ msg: "USER ADDED SUCCESSFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};

/**create AssignedAttributes */
const createAssignedAttributes = async (req, res) => {
  try {
    const AssignedAttributesObj = {
      attributeValue: req.params.id,
    };
    if (!req.params.id)
      return res
        .status(400)
        .json({ msg: "INFORMATION (id) MISSING, PLEASE CHECK YOUR REQUEST" });
    const newAssignedAttributes = new AssignedAttributes(AssignedAttributesObj);
    const result = await newAssignedAttributes.save();
    if (!result)
      return res
        .status(400)
        .json({ msg: "INFORMATION MISSING, PLEASE CHECK YOUR REQUEST" });
    res.status(201).json({ msg: "USER ADDED SUCCESSFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};

/**create Attributes */
const createAttributes = async (req, res) => {
  try {
    const { name, type } = req.body;
    const AttributesObj = {
      name: name,
      type: type,
      attributeValue: req.params.id,
    };
    if (!name || !type)
      return res
        .status(400)
        .json({ msg: "INFORMATION (NAME) MISSING, PLEASE CHECK YOUR REQUEST" });
    const newAttributes = new Attributes(AttributesObj);
    const result = await newAttributes.save();
    if (!result)
      return res
        .status(400)
        .json({ msg: "INFORMATION MISSING, PLEASE CHECK YOUR REQUEST" });
    res.status(201).json({ msg: "USER ADDED SUCCESSFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
/**create ProductType */
const createProductType = async (req, res) => {
  try {
    const { name } = req.body;
    const ProductTypeObj = {
      name: name,
      attributes: req.params.id,
    };
    if (!name)
      return res
        .status(400)
        .json({ msg: "INFORMATION (NAME) MISSING, PLEASE CHECK YOUR REQUEST" });
    const newProductType = new ProductType(ProductTypeObj);
    const result = await newProductType.save();
    if (!result)
      return res
        .status(400)
        .json({ msg: "INFORMATION MISSING, PLEASE CHECK YOUR REQUEST" });
    res.status(201).json({ msg: "USER ADDED SUCCESSFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
/**create Product */
const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    const ProductObj = {
      name: name,
      productType: req.params.type,
      assignedAttributes: req.params.att,
    };
    if (!name)
      return res
        .status(400)
        .json({ msg: "INFORMATION MISSING, PLEASE CHECK YOUR REQUEST" });
    const newProduct = new Product(ProductObj);
    const result = await newProduct.save();
    if (!result)
      return res
        .status(400)
        .json({ msg: "INFORMATION MISSING, PLEASE CHECK YOUR REQUEST" });
    res.status(201).json({ msg: "DOC ADDED SUCCESSFULLY", result });
  } catch (error) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
module.exports = {
  createAttributeValue,
  createAssignedAttributes,
  createAttributes,
  createProductType,
  createProduct,
};
