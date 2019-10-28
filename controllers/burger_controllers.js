var express = require("express");
var router = express.Router();
var burger = require("../models/burgers.js");

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

router.put("/api/burgers/:id", function (req, res) {
    var condition = `id = ${req.params.id}`;
    burger.eatOne({ "devoured": req.body.devoured }, condition, function (response) {
        if (response.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('api/burgers/:id', function (req, res) {
    var condition = `id = ${req.params.id}`;
    // console.log(condition)    
    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;