const autorController = require('../controllers/autor.js');

module.exports = (app) => {
    app.get('/autor', autorController.getAutor
        // #swagger.tags = ["Autor"]
        // #swagger.summary = "Consulta lista de autores."
        // #swagger.description = "Descrição do metodo"
    )
}