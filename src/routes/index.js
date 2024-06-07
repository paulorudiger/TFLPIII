const Aluno = require("./aluno");
const Professor = require("./professor");
const Usuario = require("./usuario");
const Turma = require("./turma");

module.exports = (app) => {
    Usuario(app)
    Aluno(app)
    Professor(app)
    Turma(app)
}