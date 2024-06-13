const Aluno = require("./aluno");
const Professor = require("./professor");
const Usuario = require("./usuario");
const Turma = require("./turma");
const Genero = require("./genero");
const Autor = require("./autor");
const Editora = require("./editora");
const Livro = require("./livro");
const Aluguel = require("./aluguel");
const Aluno_Turma = require("./aluno_turma");
const Livro_Autor = require("./livro_autor");

module.exports = (app) => {
  Usuario(app);
  Aluno(app);
  Professor(app);
  Turma(app);
  Genero(app);
  Autor(app);
  Editora(app);
  Livro(app);
  Aluguel(app);
  Aluno_Turma(app);
  Livro_Autor(app);
};
