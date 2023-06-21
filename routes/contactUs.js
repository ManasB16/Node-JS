const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");
const contactCtrl = require('../controllers/contactCtrl')

router.get("/contactus", contactCtrl.contactus);

module.exports = router;
