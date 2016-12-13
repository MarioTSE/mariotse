var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Servidor = require('../models/Servidor.js');

/* GET /servidor Listagem de servidores. */
router.get('/', function(req, res, next) {
  Servidor.find(function (err, servidor) {
    if (err) return next(err);
    res.json(servidor);
  });
});

/* POST /servidor Cadastro de servidor */
router.post('/', function(req, res, next) {
  Servidor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /servidor/matricula  Lista filtrada por um servidor*/
router.get('/:matricula', function(req, res, next) {
  Servidor.findOne({ matricula : req.params.matricula}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /servidor/:id Salva a edição de servidor */
router.put('/:id', function(req, res, next) {
  Servidor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /servidor/:id Deletando o servidor a partir do id */
router.delete('/:id', function(req, res, next) {
  Servidor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
