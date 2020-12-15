const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var gewicht;
var lengte;

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmi-calculator.html");
});

app.post("/", function(req, res) {
    gewicht = Number(req.body.gewicht);
    lengte = Number(req.body.lengte);
    var bmi = gewicht / (lengte * 2);

    res.send("Uw BMI is " + bmi);
});

app.listen(3000);