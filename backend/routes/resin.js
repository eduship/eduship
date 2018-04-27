var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Resin = require('../models/resin');

/* GET ALL ResinS */
router.get('/', function(req, res, next) {
  Resin.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Resin BY ID */
router.get('/:id', function(req, res, next) {
  Resin.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Resin */
router.post('/', function(req, res, next) {
  Resin.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Resin */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Resin.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Resin */
router.delete('/:id', function(req, res, next) {
  Resin.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
