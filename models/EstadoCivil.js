var mongoose = require('mongoose');

var EstadoCivilSchema = new mongoose.Schema({
  codigo: string,
  descricao : String
});

module.exports = mongoose.model('EstadoCivil', EstadoCivilSchema);
