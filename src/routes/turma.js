const turmaController = require("../controllers/turma");

module.exports = (app) => {
  app.get(
    "/turma",
    /* 
    #swagger.tags = ["Turma"]
    #swagger.summary = "Consulta lista de turmas."
    #swagger.description = "Rota para consultar a lista de todas as turmas cadastradas."
    #swagger.responses[200] = {
      description: 'Lista de turmas obtida com sucesso',
      schema: [{ id: 1, nome: "Turma Exemplo", turno: "Matutino" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    turmaController.getTurma
  );

  app.post(
    "/turma",
    /* 
    #swagger.tags = ["Turma"]
    #swagger.summary = "Insere uma nova turma."
    #swagger.description = "Rota para inserir uma nova turma no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir uma nova turma',
      in: 'body',
      required: true,
      schema: {
        nome: "Turma Exemplo", 
        turno: "Matutino"
      }
    }
    #swagger.responses[201] = {
      description: 'Turma criada com sucesso',
      schema: { id: 1, nome: "Turma Exemplo", turno: "Matutino" }
    }
    #swagger.responses[409] = {
      description: 'Nome da turma já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    turmaController.postTurma
  );

  app.delete(
    "/turma/:idturma",
    /* 
    #swagger.tags = ["Turma"]
    #swagger.summary = "Remove uma turma."
    #swagger.description = "Rota para remover uma turma do sistema pelo ID."
    #swagger.parameters['idturma'] = {
      description: 'ID da turma',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Turma removida com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Turma não encontrada'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    turmaController.deleteTurma
  );

  app.patch(
    "/turma/:idturma",
    /* 
    #swagger.tags = ["Turma"]
    #swagger.summary = "Atualiza parcialmente uma turma."
    #swagger.description = "Rota para atualizar parcialmente uma turma pelo ID."
    #swagger.parameters['idturma'] = {
      description: 'ID da turma',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar a turma',
      in: 'body',
      required: true,
      schema: {
        nome: "Turma Exemplo", 
        turno: "Matutino"
      }
    }
    #swagger.responses[200] = {
      description: 'Turma atualizada com sucesso',
      schema: { id: 1, nome: "Turma Exemplo", turno: "Matutino" }
    }
    #swagger.responses[404] = {
      description: 'Turma não encontrada'
    }
    #swagger.responses[409] = {
      description: 'Nome da turma já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    turmaController.patchTurma
  );

  app.put(
    "/turma/:idturma",
    /* 
    #swagger.tags = ["Turma"]
    #swagger.summary = "Atualiza todos os dados de uma turma."
    #swagger.description = "Rota para atualizar todos os dados de uma turma pelo ID."
    #swagger.parameters['idturma'] = {
      description: 'ID da turma',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir a turma',
      in: 'body',
      required: true,
      schema: {
        nome: "Turma Exemplo", 
        turno: "Matutino"
      }
    }
    #swagger.responses[200] = {
      description: 'Turma substituída com sucesso',
      schema: { id: 1, nome: "Turma Exemplo", turno: "Matutino" }
    }
    #swagger.responses[404] = {
      description: 'Turma não encontrada'
    }
    #swagger.responses[409] = {
      description: 'Nome da turma já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    turmaController.putTurma
  );
};
