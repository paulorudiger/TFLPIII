const professorController = require('../controllers/professor');

module.exports = (app) => {
    app.get('/professor', professorController.getProfessor
        // #swagger.tags = ["Professor"]
        // #swagger.summary = "Consulta lista de professores."
        // #swagger.description = "Descrição do metodo"
    )
    app.post('/professor', professorController.postProfessor
        // #swagger.tags = ["Professor"]
        /*#swagger.parameters['json'] = {
                description: 'Dados para inserir um novo aluno',
                in: 'body',
                type: 'json',
                schema: {
                     matricula: "12345678", 
                     cargo: "Professor"
                }
            }
            */

    )
    app.delete('/professor/:idprofessor', professorController.deleteProfessor
        // #swagger.tags = ["Professor"]
    )
    
    app.patch('professor/:idprofessor', professorController.patchProfessor
        // #swagger.tags = ["Professor"]
        /*#swagger.parameters['idprofessor'] = {
            description: 'Codigo do professor',
            in: 'path',
            name: 'id',
            type: 'integer',
            value: 1
        }
        */
    ) 
}