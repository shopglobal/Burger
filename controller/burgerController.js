var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");
var sweets = require("../models/sweets.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var burgerObject = {
		  burgers: data
		};
		res.render("index", burgerObject);
	});
});

router.get("/sweets", function(req, res) {
	sweets.all(function(data) {
		var sweetsObject = {
		  sweets: data
		};
		res.render("sweets", sweetsObject);
	});
});

router.post("/sweets", function(req, res) {
  	sweets.create(
  		"sweets_name",
	    [req.body.name], 
	    function() {
		res.redirect("/sweets");
	});
});

router.put("/sweets:id", function(req, res) {
	var condition = "id = " + req.params.id;

	sweets.update({
		devoured: true
		}, condition, function() {
		res.redirect("/sweets");
	});
});

router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	burger.update({
		devoured: true
		}, condition, function() {
		res.redirect("/");
	});
});

router.post("/", function(req, res) {
  	burger.create(
  		"burger_name",
	    [req.body.name], 
	    function() {
		res.redirect("/");
	});
});


module.exports = router;