const alunoTurmaController = require("../controllers/aluno_turma");

module.exports = (app) => {
  app.get(
    "/aluno_turma",
    /* 
    #swagger.tags = ["Aluno_Turma"]
    #swagger.summary = "Consulta lista de associações aluno-turma."
    #swagger.description = "Rota para consultar a lista de todas as associações aluno-turma."
    #swagger.responses[200] = {
      description: 'Lista de associações aluno-turma obtida com sucesso',
      schema: [{ idaluno: 1, idturma: 1, ano: 2024, nomeTurma: "Turma Exemplo", turno: "Matutino", matricula: "2021001", nomeAluno: "João Silva" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    alunoTurmaController.getAlunoTurma
  );

  app.post(
    "/aluno_turma",
    /* 
    #swagger.tags = ["Aluno_Turma"]
    #swagger.summary = "Cria uma nova associação aluno-turma."
    #swagger.description = "Rota para criar uma nova associação entre aluno e turma."
    #swagger.parameters['json'] = {
      description: 'Dados para criar uma nova associação aluno-turma',
      in: 'body',
      required: true,
      schema: {
        idaluno: 1,
        idturma: 1,
        ano: 2024
      }
    }
    #swagger.responses[201] = {
      description: 'Associação aluno-turma criada com sucesso',
      schema: { idaluno: 1, idturma: 1, ano: 2024 }
    }
    #swagger.responses[409] = {
      description: 'Associação aluno-turma já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    alunoTurmaController.postAlunoTurma
  );

  app.delete(
    "/aluno_turma",
    /* 
    #swagger.tags = ["Aluno_Turma"]
    #swagger.summary = "Remove uma associação aluno-turma."
    #swagger.description = "Rota para remover uma associação entre aluno e turma."
    #swagger.parameters['json'] = {
      description: 'Dados para remover a associação aluno-turma',
      in: 'body',
      required: true,
      schema: {
        idaluno: 1,
        idturma: 1
      }
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Associação aluno-turma removida com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Associação aluno-turma não encontrada'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    alunoTurmaController.deleteAlunoTurma
  );
};
