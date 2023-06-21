const path = require("path");
const rootDir = require("../util/path");
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postProducts = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.shopProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    if (products.length == 0) {
      res.sendFile(path.join(rootDir, "views", "shop.html"));
    } else {
      res.send(products);
    }
  });
};
