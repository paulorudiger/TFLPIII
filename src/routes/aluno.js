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
                     id: 1, 
                     nome: "paulo", 
                     sobrenome: "estevao",
                     periodo: 5,
                      observacao: "teste"
    
                }
            }
            */

    )
    app.delete('/aluno/:id', alunoController.deleteAluno
        // #swagger.tags = ["Aluno"]
    )
    app.put('/aluno/:id', alunoController.putAluno
        // #swagger.tags = ["Aluno"]
    )
   /* app.patch('aluno/:id', alunoController.patchAluno
        // #swagger.tags = ["Aluno"]
        /*#swagger.parameters['id'] = {
            description: 'Codigo do aluno',
            in: 'path',
            name: 'id',
            type: 'integer',
            value: 1
        }
        
    ) */
}