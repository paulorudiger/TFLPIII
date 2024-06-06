const usuarioController = require('../controllers/usuario.js');

module.exports = (app) => {
    app.get('/usuario', usuarioController.getUsuario
        // #swagger.tags = ["Usuario"]
        // #swagger.summary = "Consulta lista de usuarios."
        // #swagger.description = "Descrição do metodo"
    )
    
}