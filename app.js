// const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log('1st middleware')
    next();     // Allows the request to continue to the next middleware in line.
})

app.use((req, res, next) => {
  console.log("2nd middleware");
  res.send(`<h1>Hello to Express.js</h1>`);
});

app.listen(4000)
