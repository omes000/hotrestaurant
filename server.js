var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var confirm = false;

var app = express();
var PORT = 3000;

var haveTables = [
];
var waitingList = [
];

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

app.get("/api/tables", function(req, res) {
	return res.json(haveTables);
});

app.get("/api/wait", function(req, res) {
	return res.json(waitingList);
});

app.post("/api/new", function(req, res){
	var newReservation = req.body;

	console.log(newReservation);

	if(haveTables.length < 5){
		haveTables.push(newReservation);
		confirm = true;
		console.log("You have a reservation");
	}
	else{
		console.log("You are on the waiting list");
		confirm = false;
		waitingList.push(newReservation);
	}
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});