const livroAutorService = require("../services/livro_autor.js");

const getLivroAutor = async (req, res, next) => {
  try {
    const retorno = await livroAutorService.getLivroAutor();
    res.status(200).send(retorno);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postLivroAutor = async (req, res, next) => {
  try {
    const retorno = await livroAutorService.postLivroAutor(req.body);
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

const deleteLivroAutor = async (req, res, next) => {
  try {
    const retorno = await livroAutorService.deleteLivroAutor(req.body);
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

module.exports.getLivroAutor = getLivroAutor;
module.exports.postLivroAutor = postLivroAutor;
module.exports.deleteLivroAutor = deleteLivroAutor;
