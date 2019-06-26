var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
    res.redirect('/index');
  });

// Create all our routes and set up logic within those routes where required.
router.get("/index", function(req, res) {
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
    res.redirect('/index');
  });
});

router.post('/burger/eat/:id', function (req, res) {
    burger.update(req.params.id, function() {
        console.log(req.params.id);
      res.redirect('/index');
    });
});

// Export routes for server.js to use.
module.exports = router;
