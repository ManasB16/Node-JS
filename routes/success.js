const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const successCtrl = require("../controllers/success");

router.post("/success", successCtrl.Success);

module.exports = router;
