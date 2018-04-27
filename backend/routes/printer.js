var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Printer = require('../models/printer');

/* GET ALL PrinterS */
router.get('/', function(req, res, next) {
  Printer.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Printer BY ID */
router.get('/:id', function(req, res, next) {
  Printer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Printer */
router.post('/', function(req, res, next) {
  Printer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Printer */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Printer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Printer */
router.delete('/:id', function(req, res, next) {
  Printer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
