const alunoTurmaService = require("../services/aluno_turma");

const getAlunoTurma = async (req, res, next) => {
  try {
    const retorno = await alunoTurmaService.getAlunoTurma();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postAlunoTurma = async (req, res, next) => {
  try {
    const retorno = await alunoTurmaService.postAlunoTurma(req.body);
    res.status(201).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 409:
        res.status(409).send(err.message);
        break;
      default:
        res.status(500).send(err.message);
    }
  }
};

const deleteAlunoTurma = async (req, res, next) => {
  try {
    const retorno = await alunoTurmaService.deleteAlunoTurma(req.body);
    res.status(204).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 404:
        res.status(404).send(err.message);
        break;
      default:
        res.status(500).send(err.message);
    }
  }
};

module.exports.getAlunoTurma = getAlunoTurma;
module.exports.postAlunoTurma = postAlunoTurma;
module.exports.deleteAlunoTurma = deleteAlunoTurma;
