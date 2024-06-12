const turmaService = require("../services/turma");

const getTurma = async (req, res, next) => {
  try {
    const retorno = await turmaService.getTurma();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postTurma = async (req, res, next) => {
  try {
    const retorno = await turmaService.postTurma(req.body);
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

const deleteTurma = async (req, res, next) => {
  try {
    const retorno = await turmaService.deleteTurma(req.params);
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

const patchTurma = async (req, res, next) => {
  try {
    let params = req.body;
    params.idturma = req.params.idturma;
    const retorno = await turmaService.patchTurma(params);
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

const putTurma = async (req, res, next) => {
  try {
    let params = req.body;
    params.idturma = req.params.idturma;
    const retorno = await turmaService.putTurma(params);
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

module.exports.getTurma = getTurma;
module.exports.postTurma = postTurma;
module.exports.deleteTurma = deleteTurma;
module.exports.patchTurma = patchTurma;
module.exports.putTurma = putTurma;
