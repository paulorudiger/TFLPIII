const usuarioService = require("../services/usuario");

const loginUsuario = async (req, res, next) => {
  try {
    const { usuario, senha } = req.params;
    const retorno = await usuarioService.loginUsuario(usuario, senha);
    res.status(200).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 401:
        res.status(401).send(err.message);
        break;
      default:
        res.status(500).send(err.message);
    }
  }
};

const getUsuario = async (req, res, next) => {
  try {
    const retorno = await usuarioService.getUsuario();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUsuarioByIdusuario = async (req, res, next) => {
  try {
    const retorno = await usuarioService.getUsuarioByIdusuario(
      req.params.idusuario
    );
    res.status(200).send(retorno);
  } catch (err) {
    switch (err.status) {
      case 404:
        res.status(409).send(err.message);
        break;
      default:
        res.status(500).send(err.message);
    }
  }
};

const postUsuario = async (req, res, next) => {
  try {
    const retorno = await usuarioService.postUsuario(req.body);
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

const deleteUsuario = async (req, res, next) => {
  try {
    const retorno = await usuarioService.deleteUsuario(req.params);
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

const patchUsuario = async (req, res, next) => {
  try {
    let params = req.body;
    params.idusuario = req.params.idusuario;
    const retorno = await usuarioService.patchUsuario(params);
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

const putUsuario = async (req, res, next) => {
  try {
    let params = req.body;
    params.idusuario = req.params.idusuario;
    const retorno = await usuarioService.putUsuario(params);
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

module.exports.loginUsuario = loginUsuario;
module.exports.getUsuario = getUsuario;
module.exports.getUsuarioByIdusuario = getUsuarioByIdusuario;
module.exports.postUsuario = postUsuario;
module.exports.deleteUsuario = deleteUsuario;
module.exports.patchUsuario = patchUsuario;
module.exports.putUsuario = putUsuario;
