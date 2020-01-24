var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/blog_demoapp", { useNewUrlParser: true });


app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var PORT = 3000;
// Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fkoa.com%2Fblog%2Fimages%2Fsolo-camping-tips.jpg%3Fpreset%3DblogPhoto&imgrefurl=https%3A%2F%2Fkoa.com%2Fblog%2Ftips-for-your-first-solo-camping-trip%2F&docid=APwLaEww1umQTM&tbnid=jyrC7-xAKziLvM%3A&vet=10ahUKEwic3sT5lpXnAhVLQ80KHfQaDZ0QMwiDASgFMAU..i&w=689&h=454&bih=661&biw=1242&q=camping%20images&ved=0ahUKEwic3sT5lpXnAhVLQ80KHfQaDZ0QMwiDASgFMAU&iact=mrc&uact=8"},
        {name: "Daniel Creek", image: ""},
        {name: "Mountain crest", image: ""}
    ];
    res.render("campground");
})

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs")
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });