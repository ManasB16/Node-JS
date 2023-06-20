const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

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

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
