const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRoute = require("./routes/login");
const chatRoute = require("./routes/chat");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(loginRoute);
app.use(chatRoute);

app.listen(4000);
