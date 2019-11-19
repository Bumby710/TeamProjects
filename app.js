require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const apiKey = process.env.APIKEY;
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function(req, res) {
  res.render("home.ejs");
});
app.listen(3000, function() {
  console.log("server is live on port: 3000");
});
