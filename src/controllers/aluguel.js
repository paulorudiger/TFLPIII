const aluguelService = require("../services/aluguel.js");

const getAluguel = async (req, res, next) => {
  try {
    const retorno = await aluguelService.getAluguel();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postAluguel = async (req, res, next) => {
  try {
    const retorno = await aluguelService.postAluguel(req.body);
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

const deleteAluguel = async (req, res, next) => {
  try {
    const retorno = await aluguelService.deleteAluguel(req.params);
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

const patchAluguel = async (req, res, next) => {
  try {
    let params = req.body;
    params.idaluguel = req.params.idaluguel;
    const retorno = await aluguelService.patchAluguel(params);
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

const putAluguel = async (req, res, next) => {
  try {
    let params = req.body;
    params.idaluguel = req.params.idaluguel;
    const retorno = await aluguelService.putAluguel(params);
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

module.exports.getAluguel = getAluguel;
module.exports.postAluguel = postAluguel;
module.exports.deleteAluguel = deleteAluguel;
module.exports.patchAluguel = patchAluguel;
module.exports.putAluguel = putAluguel;
