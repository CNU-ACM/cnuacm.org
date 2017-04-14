var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var mangos = require('mongodb').MongoClient

// Setting up database

var db;
mangos.connect("mongodb://localhost:27017/NEWS", function(err,database) {
        if (err) return console.log(err);
        db = database;

	app.listen(3000,function(){
        	console.log("Live at Port 3000");
	});
});

app.post('/news', function(req,res) {
	db.collection('NEWS').save(req.body, function(err,result) {
		if (err) return console.log(err);

		console.log('saved to database');
		res.redirect('/news');
	});
});

app.set('view engine', 'ejs');

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

router.get("/member.ui.css",function(req,res){
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

router.get("/helpingout",function(req,res){
	res.sendFile(__dirname + "/img/helpingout.jpg");
});

// --> Serving the rest of the files. <--
router.get("/about",function(req,res){
	res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
	res.sendFile(path + "contact.html");
});

router.get("/news", function(req,res){
    //console.log("Accessing News!");
	db.collection('posts').find().toArray(function(err, result) {
	    if (err) return console.log(err);

	    res.render('news.ejs', {posts: result});
	    console.log(result);
	});

	//res.sendFile(path + "news.html");
	var cursor = db.collection('NEWS').find();
});

// --> Use routes defined.

app.use("/",router);

app.use("*",function(req,res){
	res.sendFile(path + "404.html");
});

