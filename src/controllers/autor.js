const autorService = require('../services/autor');

const getAutor = async (req, res, next) => {
   // console.log("chegou")
    try {
     //   const retorno = await usuarioService.getUsuario()
     var retorno = "top" 
        res.status(200).send(retorno)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports.getAutor = getAutor