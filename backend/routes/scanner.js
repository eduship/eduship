var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Scanner = require('../models/scanner');

/* GET ALL ScannerS */
router.get('/', function(req, res, next) {
  Scanner.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Scanner BY ID */
router.get('/:id', function(req, res, next) {
  Scanner.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Scanner */
router.post('/', function(req, res, next) {
  Scanner.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Scanner */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Scanner.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Scanner */
router.delete('/:id', function(req, res, next) {
  Scanner.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
