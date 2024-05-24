const alunoController = require('../controllers/aluno');

module.exports = (app) => {
    app.get('/aluno', alunoController.getAluno
        // #swagger.tags = ["Aluno"]
        // #swagger.summary = "Consulta lista de alunos."
        // #swagger.description = "Descrição do metodo"
    )
    app.post('/aluno', alunoController.postAluno
        // #swagger.tags = ["Aluno"]
        /*#swagger.parameters['json'] = {
                description: 'Dados para inserir um novo aluno',
                in: 'body',
                type: 'json',
                schema: {
                     matricula: "12345678", 
                     dataNascimento: "2002-07-02"
                }
            }
            */

    )
    app.delete('/aluno/:idaluno', alunoController.deleteAluno
        // #swagger.tags = ["Aluno"]
    )
    
    app.patch('aluno/:idaluno', alunoController.patchAluno
        // #swagger.tags = ["Aluno"]
        /*#swagger.parameters['idaluno'] = {
            description: 'Codigo do aluno',
            in: 'path',
            name: 'id',
            type: 'integer',
            value: 1
        }
        */
    ) 
}