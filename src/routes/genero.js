const generoController = require("../controllers/genero");

module.exports = (app) => {
  app.get(
    "/genero",
    /* 
    #swagger.tags = ["Genero"]
    #swagger.summary = "Consulta lista de gêneros."
    #swagger.description = "Rota para consultar a lista de todos os gêneros cadastrados."
    #swagger.responses[200] = {
      description: 'Lista de gêneros obtida com sucesso',
      schema: [{ id: 1, nomeGenero: "Gênero Exemplo" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    generoController.getGenero
  );

  app.post(
    "/genero",
    /* 
    #swagger.tags = ["Genero"]
    #swagger.summary = "Insere um novo gênero."
    #swagger.description = "Rota para inserir um novo gênero no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir um novo gênero',
      in: 'body',
      required: true,
      schema: {
        nomeGenero: "Gênero Exemplo"
      }
    }
    #swagger.responses[201] = {
      description: 'Gênero criado com sucesso',
      schema: { id: 1, nomeGenero: "Gênero Exemplo" }
    }
    #swagger.responses[409] = {
      description: 'Nome do gênero já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    generoController.postGenero
  );

  app.delete(
    "/genero/:idgenero",
    /* 
    #swagger.tags = ["Genero"]
    #swagger.summary = "Remove um gênero."
    #swagger.description = "Rota para remover um gênero do sistema pelo ID."
    #swagger.parameters['idgenero'] = {
      description: 'ID do gênero',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Gênero removido com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Gênero não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    generoController.deleteGenero
  );

  app.patch(
    "/genero/:idgenero",
    /* 
    #swagger.tags = ["Genero"]
    #swagger.summary = "Atualiza parcialmente um gênero."
    #swagger.description = "Rota para atualizar parcialmente um gênero pelo ID."
    #swagger.parameters['idgenero'] = {
      description: 'ID do gênero',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar o gênero',
      in: 'body',
      required: true,
      schema: {
        nomeGenero: "Gênero Exemplo"
      }
    }
    #swagger.responses[200] = {
      description: 'Gênero atualizado com sucesso',
      schema: { id: 1, nomeGenero: "Gênero Exemplo" }
    }
    #swagger.responses[404] = {
      description: 'Gênero não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Nome do gênero já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    generoController.patchGenero
  );

  app.put(
    "/genero/:idgenero",
    /* 
    #swagger.tags = ["Genero"]
    #swagger.summary = "Atualiza todos os dados de um gênero."
    #swagger.description = "Rota para atualizar todos os dados de um gênero pelo ID."
    #swagger.parameters['idgenero'] = {
      description: 'ID do gênero',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir o gênero',
      in: 'body',
      required: true,
      schema: {
        nomeGenero: "Gênero Exemplo"
      }
    }
    #swagger.responses[200] = {
      description: 'Gênero substituído com sucesso',
      schema: { id: 1, nomeGenero: "Gênero Exemplo" }
    }
    #swagger.responses[404] = {
      description: 'Gênero não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Nome do gênero já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    generoController.putGenero
  );
};
