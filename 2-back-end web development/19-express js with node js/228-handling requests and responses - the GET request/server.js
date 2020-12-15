const express = require("express");

const app = express();

app.get("/", function(req, response) {
    response.send("<h2>node js en express aan het leren</h2>");
});

app.get("/over-mij", function(req, response) {
    response.send("<h2>Mijn bio!</h2>");
});


app.listen(3000, function() {
    console.log("server gestart op 3000");
});