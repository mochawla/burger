var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//put all routes over here using router

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name"], [req.body.burger_name], 
    function(result) {
        res.json({ id: result.insertId })
    });
});  


router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.updateOne({devoured: req.body.devoured}, condition, 
    function(result) {
      console.log(req.body.devoured);
      console.log(result);
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }    
    });
});

// Export routes for server.js to use.

module.exports = router;