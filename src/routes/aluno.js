const alunoController = require("../controllers/aluno");

module.exports = (app) => {
  app.get(
    "/aluno",
    /* 
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Consulta lista de alunos."
    #swagger.description = "Rota para consultar a lista de todos os alunos cadastrados."
    #swagger.responses[200] = {
      description: 'Lista de alunos obtida com sucesso',
      schema: [{ idaluno: 1, idusuario: 1, matricula: "2021001", dataNascimento: "2000-01-01" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    alunoController.getAluno
  );

  app.post(
    "/aluno",
    /* 
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Insere um novo aluno."
    #swagger.description = "Rota para inserir um novo aluno no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir um novo aluno',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        matricula: "2021001",
        dataNascimento: "2000-01-01"
      }
    }
    #swagger.responses[201] = {
      description: 'Aluno criado com sucesso',
      schema: { idaluno: 1, idusuario: 1, matricula: "2021001", dataNascimento: "2000-01-01" }
    }
    #swagger.responses[409] = {
      description: 'Matrícula já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    alunoController.postAluno
  );

  app.delete(
    "/aluno/:idaluno",
    /* 
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Remove um aluno."
    #swagger.description = "Rota para remover um aluno do sistema pelo ID."
    #swagger.parameters['idaluno'] = {
      description: 'ID do aluno',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Aluno removido com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Aluno não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    alunoController.deleteAluno
  );

  app.patch(
    "/aluno/:idaluno",
    /* 
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Atualiza parcialmente um aluno."
    #swagger.description = "Rota para atualizar parcialmente um aluno pelo ID."
    #swagger.parameters['idaluno'] = {
      description: 'ID do aluno',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar o aluno',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        matricula: "2021001",
        dataNascimento: "2000-01-01"
      }
    }
    #swagger.responses[200] = {
      description: 'Aluno atualizado com sucesso',
      schema: { idaluno: 1, idusuario: 1, matricula: "2021001", dataNascimento: "2000-01-01" }
    }
    #swagger.responses[404] = {
      description: 'Aluno não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Matrícula já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    alunoController.patchAluno
  );

  app.put(
    "/aluno/:idaluno",
    /* 
    #swagger.tags = ["Aluno"]
    #swagger.summary = "Atualiza todos os dados de um aluno."
    #swagger.description = "Rota para atualizar todos os dados de um aluno pelo ID."
    #swagger.parameters['idaluno'] = {
      description: 'ID do aluno',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir o aluno',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        matricula: "2021001",
        dataNascimento: "2000-01-01"
      }
    }
    #swagger.responses[200] = {
      description: 'Aluno substituído com sucesso',
      schema: { idaluno: 1, idusuario: 1, matricula: "2021001", dataNascimento: "2000-01-01" }
    }
    #swagger.responses[404] = {
      description: 'Aluno não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Matrícula já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    alunoController.putAluno
  );
};
