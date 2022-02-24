const Product = require("../models/product.model");

const updateProductName = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!id)
      return res.status(400).json({ msg: " ERROR 400 NO MODIFIED STATUS" });
    const result = await Product.updateOne({ _id: id }, req.body);
    if (!result)
      return res.status(400).json({ msg: " ERROR 400 NO MODIFIED STATUS II" });
    return res
      .status(200)
      .json({ msg: "STATUS MODIFIED SECCESSUFULY", result });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ msg: "INTERNAL SERVER ERROR !" });
  }
};
module.exports = {
  updateProductName,
};
