const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home");
});
app.get("/store", function(req, res){
  res.render("store");
 });
 app.get("/temp", function(req, res){
  res.render("temp");
 });

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
