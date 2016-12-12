var mongoose = require('mongoose');

var LivroSchema = new mongoose.Schema({
  titulo: String,
  autor : String,
  ano : Number,
  editora : String
});

module.exports = mongoose.model('Livro', LivroSchema);
