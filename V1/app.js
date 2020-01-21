var express = require("express");
var app = express();

var PORT = 3000;

app.get("/", function(req, res){
    res.render("Landing");
})

app.get("/campgrounds", function(req, res){
    res.render("Landing");
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });