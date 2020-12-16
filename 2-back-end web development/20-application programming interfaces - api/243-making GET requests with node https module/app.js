const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const stad = req.body.stadNaam;
    const apiKey = "2636084edac541928a131f31f05dc35d";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + stad + "&appid=" + apiKey + "&units=metric";
    
        https.get(url, function(response) {
        response.on("data", function(data) {
            const weerData = JSON.parse(data);
            const temperatuur = weerData.main.temp;
            const gevoel = weerData.weather[0].description;
            const icoon = "http://openweathermap.org/img/wn/" + weerData.weather[0].icon + "@2x.png";
            res.write("<h1>" + ("temperatuur in " + stad + " is " + temperatuur) + "</h1>");
            res.write("<img src=" + icoon + ">");
            res.send();
        });
    });
});







app.listen(3000, function() {
    console.log("server doet het op 3000.");
});