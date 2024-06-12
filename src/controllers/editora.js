const editoraService = require("../services/editora");

const getEditora = async (req, res, next) => {
  try {
    const retorno = await editoraService.getEditora();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postEditora = async (req, res, next) => {
  try {
    const retorno = await editoraService.postEditora(req.body);
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

const deleteEditora = async (req, res, next) => {
  try {
    const retorno = await editoraService.deleteEditora(req.params);
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

const patchEditora = async (req, res, next) => {
  try {
    let params = req.body;
    params.ideditora = req.params.ideditora;
    const retorno = await editoraService.patchEditora(params);
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

const putEditora = async (req, res, next) => {
  try {
    let params = req.body;
    params.ideditora = req.params.ideditora;
    const retorno = await editoraService.putEditora(params);
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

module.exports.getEditora = getEditora;
module.exports.postEditora = postEditora;
module.exports.deleteEditora = deleteEditora;
module.exports.patchEditora = patchEditora;
module.exports.putEditora = putEditora;
