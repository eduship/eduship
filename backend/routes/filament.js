var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Filament = require('../models/filament');

/* GET ALL FilamentS */
router.get('/', function(req, res, next) {
  Filament.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Filament BY ID */
router.get('/:id', function(req, res, next) {
  Filament.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Filament */
router.post('/', function(req, res, next) {
  Filament.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Filament */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Filament.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Filament */
router.delete('/:id', function(req, res, next) {
  Filament.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
