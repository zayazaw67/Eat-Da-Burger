var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get('/burgers', function (req,res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        }; console.log(hbsObject);
        res.render('index', hbsObject);
    });
});