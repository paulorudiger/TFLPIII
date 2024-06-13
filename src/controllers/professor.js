const professorService = require("../services/professor");

const getProfessor = async (req, res, next) => {
  try {
    const retorno = await professorService.getProfessor();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postProfessor = async (req, res, next) => {
  try {
    const retorno = await professorService.postProfessor(req.body);
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

const deleteProfessor = async (req, res, next) => {
  try {
    const retorno = await professorService.deleteProfessor(req.params);
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

const patchProfessor = async (req, res, next) => {
  try {
    let params = req.body;
    params.idprofessor = req.params.idprofessor;
    const retorno = await professorService.patchProfessor(params);
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

const putProfessor = async (req, res, next) => {
  try {
    let params = req.body;
    params.idprofessor = req.params.idprofessor;
    const retorno = await professorService.putProfessor(params);
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

module.exports.getProfessor = getProfessor;
module.exports.postProfessor = postProfessor;
module.exports.deleteProfessor = deleteProfessor;
module.exports.patchProfessor = patchProfessor;
module.exports.putProfessor = putProfessor;
