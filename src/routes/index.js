const Aluno = require("./aluno");
const Professor = require("./professor");
const Usuario = require("./usuario");
const Turma = require("./turma");
const Genero = require("./genero");

module.exports = (app) => {
    Usuario(app)
    Aluno(app)
    Professor(app)
    Turma(app)
    Genero(app)
}