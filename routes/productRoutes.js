const express = require("express");
const { updateProductName } = require("../controllers/updateController");
const { getProducts } = require("../controllers/getController");
const {
  deleteProduct,
  deleteAttributesValue,
  deleteAssignedAttributes,
  deleteAttributes,
  deleteProductType,
} = require("../controllers/deleteController");
const {
  createAttributeValue,
  createAssignedAttributes,
  createAttributes,
  createProductType,
  createProduct,
} = require("../controllers/createController");

const productRouter = express.Router();
/**Gets */
productRouter.get("/", getProducts);
/**Create */
productRouter.post("/attributeValue", createAttributeValue);
productRouter.post("/attributes/:id", createAttributes);
productRouter.post("/assigned/:id", createAssignedAttributes);
productRouter.post("/productType/:id", createProductType);
productRouter.post("/product/:type/:att", createProduct);
/**Delete */
productRouter.delete("/attributesValue/delete/:id", deleteAttributesValue);
productRouter.delete("/attributes/delete/:id", deleteAttributes);
productRouter.delete(
  "/assignedAttributes/delete/:id",
  deleteAssignedAttributes
);
productRouter.delete("/productType/delete/:id", deleteProductType);
productRouter.delete("/product/delete/:id", deleteProduct);
/**Update */
productRouter.put("/product/update/:id", updateProductName);
module.exports = productRouter;
