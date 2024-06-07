const turmaController = require('../controllers/turma.js');

module.exports = (app) => {
    app.get('/turma', turmaController.getTurma
        // #swagger.tags = ["Turma"]
        // #swagger.summary = "Consulta lista de turmas."
        // #swagger.description = "Descrição do metodo"
    )
    
}