var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Event = require('../models/event');

/* GET ALL EventS */
router.get('/', function(req, res, next) {
  Event.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Event BY ID */
router.get('/:id', function(req, res, next) {
  Event.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
