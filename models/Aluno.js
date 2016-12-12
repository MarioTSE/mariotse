var mongoose = require('mongoose');

var AlunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  turma : String,
  turno : String,
  matricula : number
});

module.exports = mongoose.model('Aluno', AlunoSchema);
