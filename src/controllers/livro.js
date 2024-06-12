const livroService = require("../services/livro");

const getLivro = async (req, res, next) => {
  try {
    const retorno = await livroService.getLivro();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postLivro = async (req, res, next) => {
  try {
    const retorno = await livroService.postLivro(req.body);
    res.status(201).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 400:
        res.status(400).send(err.message);
        break;
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

const deleteLivro = async (req, res, next) => {
  try {
    const retorno = await livroService.deleteLivro(req.params);
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

const patchLivro = async (req, res, next) => {
  try {
    let params = req.body;
    params.idlivro = req.params.idlivro;
    const retorno = await livroService.patchLivro(params);
    res.status(200).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 400:
        res.status(400).send(err.message);
        break;
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

const putLivro = async (req, res, next) => {
  try {
    let params = req.body;
    params.idlivro = req.params.idlivro;
    const retorno = await livroService.putLivro(params);
    res.status(200).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 400:
        res.status(400).send(err.message);
        break;
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

module.exports.getLivro = getLivro;
module.exports.postLivro = postLivro;
module.exports.deleteLivro = deleteLivro;
module.exports.patchLivro = patchLivro;
module.exports.putLivro = putLivro;
