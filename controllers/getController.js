const Product = require("../models/product.model");

/**get all Products */
const getProducts = async (req, res) => {
  try {
    const result = await Product.find({})
      .populate({
        path: "assignedAttributes",
        populate: { path: "attributeValue", model: "attributesValue" },
      })
      .populate({
        path: "productType",
        populate: {
          path: "attributes",
          model: "attributes",
          populate: { path: "attributeValue", model: "attributesValue" },
        },
      });
    res.status(200).json({ msg: "GET SUCCEFULLY", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
module.exports = {
  getProducts,
};
