const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const errorController = require("./controllers/error");

const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactRoute = require("./routes/contactUs");
const successRoute = require("./routes/success");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);

app.use(errorController.get404);

app.listen(4000);
