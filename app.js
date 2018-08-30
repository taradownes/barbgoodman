const express = require("express"),
      bodyParser = require("body-parser"),
      exphbs = require("express-handlebars"),
      nodemailer = require("nodemailer"),
      app = express()

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname));

//ROUTES

//HOME
app.get("/", function(req, res){
    res.render("index");
});

//MYTEAM

//SERVICES/PHILOSOPHY

//CONTACT
app.get("/contact", function(req, res){
    res.render("contact");
});

//TESTIMONIALS




// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("server started");
// });
app.listen(3000, function(){
    console.log("server started");
});