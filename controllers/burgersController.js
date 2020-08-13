var express = require("express");
var burger = require("../models/burger");

var routers = express.Router();

var burger = require("../models/burger");
// Create all our routes and set up logic within those routes where required.
routers.get("/", function(req, res) { 
      res.redirect("/burgers");
});
routers.get("/burgers", function(req, res) { 
    burger.all(function(dataOfBurger){
        res.render("index", {data_burger : dataOfBurger});
    })
});
routers.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result){
    res.redirect("/");
});
});
routers.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.json(result)
    });
});


module.exports = routers;