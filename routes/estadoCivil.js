var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var EstadoCivil = require('../models/EstadoCivil.js');

/* GET /estadoCivil Listagem de estados civis. */
router.get('/', function(req, res, next) {
  EstadoCivil.find(function (err, estadoCivil) {
    if (err) return next(err);
    res.json(estadoCivil);
  });
});

/* POST /estadoCivil Cadastro de estadoCivil */
router.post('/', function(req, res, next) {
  EstadoCivil.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /estadoCivil/codigo  Lista filtrada por um estadoCivil*/
router.get('/:codigo', function(req, res, next) {
  EstadoCivil.findOne({ codigo : req.params.codigo}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /estadoCivil/:id Salva a edição de estadoCivil */
router.put('/:id', function(req, res, next) {
  EstadoCivil.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /estadoCivil/:id Deletando o estadoCivil a partir do id */
router.delete('/:id', function(req, res, next) {
  EstadoCivil.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
