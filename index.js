const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var serveIndex = require('serve-index');

const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/.well-known', express.static('.well-known'), serveIndex('.well-known'));
app.use(express.static("public"));
// app.use(express.static("php"));

app.get("/",function(req,res){
  res.render("home");
});
// app.get("/lightning", function(req, res){
//   res.render("ln");
//  });

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
