var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var PostProvider = require("./postprovider-memory").PostProvider

router.use(function (req,res,next) {
  //console.log(req); // --> DEBUGGING Purposes
  next();
});

router.get("/",function(req,res){
	res.sendFile(path + "index.html");
});

// --> serving stylesheets <--
router.get("/bootstrap.css",function(req,res){
	res.sendFile(__dirname + "/styles/bootstrap.css");
});

router.get("/main.css",function(req,res){
	res.sendFile(__dirname + "/styles/main.css");
});

router.get("/footer.css", function(req,res){
	res.sendFile(__dirname + "/styles/footer.css");
});

// --> serving images to be used <--
router.get("/logo",function(req,res){
	res.sendFile(__dirname + "/img/logo.png");
});

router.get("/bluestreak",function(req,res){
	res.sendFile(__dirname + "/img/bluestreak.jpg");
});

router.get("/lan_one",function(req,res){
	res.sendFile(__dirname + "/img/lan(1).jpg");
});

router.get("lan_two",function(req,res){
	res.sendFile(__dirname + "/img/lan(2).jpg");
});

router.get("/silverstreak",function(req,res){
	res.sendFile(__dirname + "/img/silverstreak.jpg");
});

// --> Serving the rest of the files. <--
router.get("/about",function(req,res){
	res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
	res.sendFile(path + "contact.html");
});

router.get("/news", function(req,res){
	res.sendFile(path + "news.html");
});

// --> Use routes defined.

app.use("/",router);

app.use("*",function(req,res){
	res.sendFile(path + "404.html");
});

var postProvider = new PostProvider();

app.get( '/', function(req, res) {
	postProvider.findAll(function(error,docs){
		res.send(docs);
	})
});

app.listen(3000,function(){
	console.log("Live at Port 3000");
});

