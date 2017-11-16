var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

var haveTables = [];
var waitingList = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});