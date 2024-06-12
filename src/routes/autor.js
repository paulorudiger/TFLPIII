const autorController = require("../controllers/autor");

module.exports = (app) => {
  app.get(
    "/autor",
    /* 
    #swagger.tags = ["Autor"]
    #swagger.summary = "Consulta lista de autores."
    #swagger.description = "Rota para consultar a lista de todos os autores cadastrados."
    #swagger.responses[200] = {
      description: 'Lista de autores obtida com sucesso',
      schema: [{ id: 1, nome: "Autor Exemplo", nacionalidade: "Brasileiro" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    autorController.getAutor
  );

  app.post(
    "/autor",
    /* 
    #swagger.tags = ["Autor"]
    #swagger.summary = "Insere um novo autor."
    #swagger.description = "Rota para inserir um novo autor no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir um novo autor',
      in: 'body',
      required: true,
      schema: {
        nome: "Autor Exemplo", 
        nacionalidade: "Brasileiro"
      }
    }
    #swagger.responses[201] = {
      description: 'Autor criado com sucesso',
      schema: { id: 1, nome: "Autor Exemplo", nacionalidade: "Brasileiro" }
    }
    #swagger.responses[409] = {
      description: 'Nome do autor já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    autorController.postAutor
  );

  app.delete(
    "/autor/:idautor",
    /* 
    #swagger.tags = ["Autor"]
    #swagger.summary = "Remove um autor."
    #swagger.description = "Rota para remover um autor do sistema pelo ID."
    #swagger.parameters['idautor'] = {
      description: 'ID do autor',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Autor removido com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Autor não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    autorController.deleteAutor
  );

  app.patch(
    "/autor/:idautor",
    /* 
    #swagger.tags = ["Autor"]
    #swagger.summary = "Atualiza parcialmente um autor."
    #swagger.description = "Rota para atualizar parcialmente um autor pelo ID."
    #swagger.parameters['idautor'] = {
      description: 'ID do autor',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar o autor',
      in: 'body',
      required: true,
      schema: {
        nome: "Autor Exemplo", 
        nacionalidade: "Brasileiro"
      }
    }
    #swagger.responses[200] = {
      description: 'Autor atualizado com sucesso',
      schema: { id: 1, nome: "Autor Exemplo", nacionalidade: "Brasileiro" }
    }
    #swagger.responses[404] = {
      description: 'Autor não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Nome do autor já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    autorController.patchAutor
  );

  app.put(
    "/autor/:idautor",
    /* 
    #swagger.tags = ["Autor"]
    #swagger.summary = "Atualiza todos os dados de um autor."
    #swagger.description = "Rota para atualizar todos os dados de um autor pelo ID."
    #swagger.parameters['idautor'] = {
      description: 'ID do autor',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir o autor',
      in: 'body',
      required: true,
      schema: {
        nome: "Autor Exemplo", 
        nacionalidade: "Brasileiro"
      }
    }
    #swagger.responses[200] = {
      description: 'Autor substituído com sucesso',
      schema: { id: 1, nome: "Autor Exemplo", nacionalidade: "Brasileiro" }
    }
    #swagger.responses[404] = {
      description: 'Autor não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Nome do autor já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    autorController.putAutor
  );
};
