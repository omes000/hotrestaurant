var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

var haveTables = [];
var waitingList = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function(req, res) {
	res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function(req, res) {
	res.sendFile(path.join(__dirname, "make.html"));
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});