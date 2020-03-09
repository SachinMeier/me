const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');
//ADDED
// var execPHP = require('./execphp.js')();
// execPHP.phpFolder = '/Users/moi/Downloads/CS/me/php/';

// app.use('*.php',function(request,response,next) {
// 	execPHP.parseFile(request.originalUrl,function(phpResult) {
// 		response.write(phpResult);
// 		response.end();
// 	});
// });
//ENDADD
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
// app.use(express.static("php"));

app.get("/",function(req,res){
  res.render("home");
});
app.get("/store", function(req, res){
  res.render("store");
 });
//  app.get("/mail.php", function(req, res){
//   res.render("mail.php");
//  });
 app.get("/temp", function(req, res){
  res.render("temp");
 });

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
