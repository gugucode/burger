var express = require("express");
var body_parser = require("body-parser");

var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");
var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

app.use(routes);

app.listen(PORT,function(){
    console.log("Listening on Port "+PORT);
})
