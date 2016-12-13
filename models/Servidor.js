var mongoose = require('mongoose');
var EstadoCivil = require('EstadoCivil');

var ServidorSchema = new mongoose.Schema({
    matricula: Number,
    nome: String,
    dataNascimento: Date,
    sexo: String,
    //estadoCivil    : {s:"solteiro", c : "casado"},
    estadoCivil: EstadoCivil,
    cepResidencia: String,
    logradouroResidencia: String,
    numeroLogradouroResidencia: String,
    complementoResidencia: String,
    bairroResidencia: String,
    cidadeResidencia: String,
    ufResidencia: String
});

module.exports = mongoose.model('Servidor', ServidorSchema);
