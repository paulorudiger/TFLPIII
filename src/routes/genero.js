const generoController = require('../controllers/genero.js');

module.exports = (app) => {
    app.get('/genero', generoController.getGenero
        // #swagger.tags = ["Genero"]
        // #swagger.summary = "Consulta lista de generos."
        // #swagger.description = "Descrição do metodo"
    )
    
}