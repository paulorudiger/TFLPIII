const Aluno = require("./aluno");
const Professor = require("./professor");
const Usuario = require("./usuario");

module.exports = (app) => {
    Usuario(app)
    Aluno(app)
    Professor(app)
}