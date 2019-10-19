var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burgers.js");

// router.get("/", function(req, res) {
//     res.redirect("/burgers");
// });

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject.burgers);
        res.render('index', hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], function (data) {
        // console.log(data)
        res.redirect('/');
    });
});

module.exports = router;