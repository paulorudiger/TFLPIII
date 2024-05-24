const Aluno = require("./aluno");
const Professor = require("./professor");

module.exports = (app) => {
    Aluno(app)
    Professor(app)
}