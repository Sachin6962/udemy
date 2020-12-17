const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/aanmelden.html");
});

app.post("/", function(req, res) {
    var voornaam = req.body.voornaam;

    res.write("<h1" + voornaam + "</h1>");
    res.send();
});

app.listen(3000);