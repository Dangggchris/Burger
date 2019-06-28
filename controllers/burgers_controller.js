var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burger/new", function(req, res) {
  burger.insert(req.body.burger_name, function() {
    console.log(req.body);
    res.redirect('/');
  });
});

router.post('/burger/eat/:id', function (req, res) {
    burger.update(req.params.id, function() {
        console.log(req.params.id);
      res.redirect('/');
    });
});

// Export routes for server.js to use.
module.exports = router;
