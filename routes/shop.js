const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const productController = require("../controllers/products");

router.get("/", productController.shopProducts);

module.exports = router;
