var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burgers.js");

// router.get("/", function(req, res) {
//     res.redirect("/burgers");
// });

router.get('/', function (req,res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        }; console.log(hbsObject);
        res.render('index', {burgers:hbsObject});
    });
});

module.exports = router;