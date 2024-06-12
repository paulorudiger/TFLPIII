const autorService = require("../services/autor");

const getAutor = async (req, res, next) => {
  try {
    const retorno = await autorService.getAutor();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postAutor = async (req, res, next) => {
  try {
    const retorno = await autorService.postAutor(req.body);
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

const deleteAutor = async (req, res, next) => {
  try {
    const retorno = await autorService.deleteAutor(req.params);
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

const patchAutor = async (req, res, next) => {
  try {
    let params = req.body;
    params.idautor = req.params.idautor;
    const retorno = await autorService.patchAutor(params);
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

const putAutor = async (req, res, next) => {
  try {
    let params = req.body;
    params.idautor = req.params.idautor;
    const retorno = await autorService.putAutor(params);
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

module.exports.getAutor = getAutor;
module.exports.postAutor = postAutor;
module.exports.deleteAutor = deleteAutor;
module.exports.patchAutor = patchAutor;
module.exports.putAutor = putAutor;
