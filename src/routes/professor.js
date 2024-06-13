const professorController = require("../controllers/professor");

module.exports = (app) => {
  app.get(
    "/professor",
    /* 
    #swagger.tags = ["Professor"]
    #swagger.summary = "Consulta lista de professores."
    #swagger.description = "Rota para consultar a lista de todos os professores cadastrados."
    #swagger.responses[200] = {
      description: 'Lista de professores obtida com sucesso',
      schema: [{ idprofessor: 1, idusuario: 1, matricula: "2021001", cargo: "Professor" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    professorController.getProfessor
  );

  app.post(
    "/professor",
    /* 
    #swagger.tags = ["Professor"]
    #swagger.summary = "Insere um novo professor."
    #swagger.description = "Rota para inserir um novo professor no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir um novo professor',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        matricula: "2021001",
        cargo: "Professor"
      }
    }
    #swagger.responses[201] = {
      description: 'Professor criado com sucesso',
      schema: { idprofessor: 1, idusuario: 1, matricula: "2021001", cargo: "Professor" }
    }
    #swagger.responses[409] = {
      description: 'Matrícula já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    professorController.postProfessor
  );

  app.delete(
    "/professor/:idprofessor",
    /* 
    #swagger.tags = ["Professor"]
    #swagger.summary = "Remove um professor."
    #swagger.description = "Rota para remover um professor do sistema pelo ID."
    #swagger.parameters['idprofessor'] = {
      description: 'ID do professor',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Professor removido com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Professor não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    professorController.deleteProfessor
  );

  app.patch(
    "/professor/:idprofessor",
    /* 
    #swagger.tags = ["Professor"]
    #swagger.summary = "Atualiza parcialmente um professor."
    #swagger.description = "Rota para atualizar parcialmente um professor pelo ID."
    #swagger.parameters['idprofessor'] = {
      description: 'ID do professor',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar o professor',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        matricula: "2021001",
        cargo: "Professor"
      }
    }
    #swagger.responses[200] = {
      description: 'Professor atualizado com sucesso',
      schema: { idprofessor: 1, idusuario: 1, matricula: "2021001", cargo: "Professor" }
    }
    #swagger.responses[404] = {
      description: 'Professor não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Matrícula já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    professorController.patchProfessor
  );

  app.put(
    "/professor/:idprofessor",
    /* 
    #swagger.tags = ["Professor"]
    #swagger.summary = "Atualiza todos os dados de um professor."
    #swagger.description = "Rota para atualizar todos os dados de um professor pelo ID."
    #swagger.parameters['idprofessor'] = {
      description: 'ID do professor',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir o professor',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        matricula: "2021001",
        cargo: "Professor"
      }
    }
    #swagger.responses[200] = {
      description: 'Professor substituído com sucesso',
      schema: { idprofessor: 1, idusuario: 1, matricula: "2021001", cargo: "Professor" }
    }
    #swagger.responses[404] = {
      description: 'Professor não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Matrícula já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    professorController.putProfessor
  );
};
