var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  //console.log(req); // --> DEBUGGING Purposes
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/bootstrap.css",function(req,res){
  res.sendFile(__dirname + "/styles/bootstrap.css");
});

router.get("/main.css",function(req,res){
  res.sendFile(__dirname + "/styles/main.css");
});

router.get("/logo",function(req,res){
	res.sendFile(__dirname + "/img/logo.png");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/news", function(req,res){
  res.sendFile(path + "news.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});

