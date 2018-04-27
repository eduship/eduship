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

/* SAVE Event */
router.post('/', function(req, res, next) {
  Event.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Event */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Event.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Event */
router.delete('/:id', function(req, res, next) {
  Event.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
