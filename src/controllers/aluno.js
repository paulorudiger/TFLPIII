const alunoService = require("../services/aluno");

const getAluno = async (req, res, next) => {
  try {
    const retorno = await alunoService.getAluno();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postAluno = async (req, res, next) => {
  try {
    const retorno = await alunoService.postAluno(req.body);
    res.status(201).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 404:
        res.status(404).send(err.message);
        break;
      case 409:
        res.status(409).send(err.message);
        break;
      default:
        res.status(500).send(err.message);
    }
  }
};

const deleteAluno = async (req, res, next) => {
  try {
    const retorno = await alunoService.deleteAluno(req.params);
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

const patchAluno = async (req, res, next) => {
  try {
    let params = req.body;
    params.idaluno = req.params.idaluno;
    const retorno = await alunoService.patchAluno(params);
    res.status(200).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 404:
        res.status(404).send(err.message);
        break;
      case 409:
        res.status(409).send(err.message);
        break;
      default:
        res.status(500).send(err.message);
    }
  }
};

const putAluno = async (req, res, next) => {
  try {
    let params = req.body;
    params.idaluno = req.params.idaluno;
    const retorno = await alunoService.putAluno(params);
    res.status(200).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 404:
        res.status(404).send(err.message);
        break;
      case 409:
        res.status(409).send(err.message);
        break;
      default:
        res.status(500).send(err.message);
    }
  }
};

module.exports.getAluno = getAluno;
module.exports.postAluno = postAluno;
module.exports.deleteAluno = deleteAluno;
module.exports.patchAluno = patchAluno;
module.exports.putAluno = putAluno;
