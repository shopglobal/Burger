var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var port = process.env.PORT || 80;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var helpers = require('handlebars-helpers')(['table', 'math']);
var connection = require("./config/connection.js");

var routes = require("./controller/burgerController.js");
app.use("/", routes);

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

