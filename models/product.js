const path = require("path");
const rootDir = require("../util/path");
const fs = require("fs");

const p = path.join(rootDir, "data", "products.json");

const getProducts = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProducts((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getProducts(cb);
  }
};
