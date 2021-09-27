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
// app.use(express.static("php"));

app.get("/",function(req,res){
  res.render("home");
});
app.get("/lightning", function(req, res){
  res.render("ln");
 });

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
