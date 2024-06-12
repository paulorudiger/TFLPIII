const generoService = require("../services/genero");

const getGenero = async (req, res, next) => {
  try {
    const retorno = await generoService.getGenero();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postGenero = async (req, res, next) => {
  try {
    const retorno = await generoService.postGenero(req.body);
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

const deleteGenero = async (req, res, next) => {
  try {
    const retorno = await generoService.deleteGenero(req.params);
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

const patchGenero = async (req, res, next) => {
  try {
    let params = req.body;
    params.idgenero = req.params.idgenero;
    const retorno = await generoService.patchGenero(params);
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

const putGenero = async (req, res, next) => {
  try {
    let params = req.body;
    params.idgenero = req.params.idgenero;
    const retorno = await generoService.putGenero(params);
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

module.exports.getGenero = getGenero;
module.exports.postGenero = postGenero;
module.exports.deleteGenero = deleteGenero;
module.exports.patchGenero = patchGenero;
module.exports.putGenero = putGenero;
