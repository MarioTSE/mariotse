var mongoose = require('mongoose');

var EstadoCivilSchema = new mongoose.Schema({
  codigo: String,
  descricao : String
});

module.exports = mongoose.model('EstadoCivil', EstadoCivilSchema);
