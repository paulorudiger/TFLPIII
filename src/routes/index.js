const Aluno = require("./aluno");
const Professor = require("./professor");
const Usuario = require("./usuario");
const Turma = require("./turma");
const Genero = require("./genero");
const Autor = require("./autor");
const Editora = require("./editora");

module.exports = (app) => {
    Usuario(app)
    Aluno(app)
    Professor(app)
    Turma(app)
    Genero(app)
    Autor(app)
    Editora(app)
}