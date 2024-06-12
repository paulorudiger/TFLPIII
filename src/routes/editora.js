const editoraController = require("../controllers/editora");

module.exports = (app) => {
  app.get(
    "/editora",
    /* 
    #swagger.tags = ["Editora"]
    #swagger.summary = "Consulta lista de editoras."
    #swagger.description = "Rota para consultar a lista de todas as editoras cadastradas."
    #swagger.responses[200] = {
      description: 'Lista de editoras obtida com sucesso',
      schema: [{ id: 1, nomeEditora: "Editora Exemplo", endereco: "Rua Exemplo, 123" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    editoraController.getEditora
  );

  app.post(
    "/editora",
    /* 
    #swagger.tags = ["Editora"]
    #swagger.summary = "Insere uma nova editora."
    #swagger.description = "Rota para inserir uma nova editora no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir uma nova editora',
      in: 'body',
      required: true,
      schema: {
        nomeEditora: "Editora Exemplo", 
        endereco: "Rua Exemplo, 123"
      }
    }
    #swagger.responses[201] = {
      description: 'Editora criada com sucesso',
      schema: { id: 1, nomeEditora: "Editora Exemplo", endereco: "Rua Exemplo, 123" }
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    editoraController.postEditora
  );

  app.delete(
    "/editora/:ideditora",
    /* 
    #swagger.tags = ["Editora"]
    #swagger.summary = "Remove uma editora."
    #swagger.description = "Rota para remover uma editora do sistema pelo ID."
    #swagger.parameters['ideditora'] = {
      description: 'ID da editora',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Editora removida com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Editora não encontrada'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    editoraController.deleteEditora
  );

  app.patch(
    "/editora/:ideditora",
    /* 
    #swagger.tags = ["Editora"]
    #swagger.summary = "Atualiza parcialmente uma editora."
    #swagger.description = "Rota para atualizar parcialmente uma editora pelo ID."
    #swagger.parameters['ideditora'] = {
      description: 'ID da editora',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar a editora',
      in: 'body',
      required: true,
      schema: {
        nomeEditora: "Editora Exemplo", 
        endereco: "Rua Exemplo, 123"
      }
    }
    #swagger.responses[200] = {
      description: 'Editora atualizada com sucesso',
      schema: { id: 1, nomeEditora: "Editora Exemplo", endereco: "Rua Exemplo, 123" }
    }
    #swagger.responses[404] = {
      description: 'Editora não encontrada'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    editoraController.patchEditora
  );

  app.put(
    "/editora/:ideditora",
    /* 
    #swagger.tags = ["Editora"]
    #swagger.summary = "Atualiza todos os dados de uma editora."
    #swagger.description = "Rota para atualizar todos os dados de uma editora pelo ID."
    #swagger.parameters['ideditora'] = {
      description: 'ID da editora',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir a editora',
      in: 'body',
      required: true,
      schema: {
        nomeEditora: "Editora Exemplo", 
        endereco: "Rua Exemplo, 123"
      }
    }
    #swagger.responses[200] = {
      description: 'Editora substituída com sucesso',
      schema: { id: 1, nomeEditora: "Editora Exemplo", endereco: "Rua Exemplo, 123" }
    }
    #swagger.responses[404] = {
      description: 'Editora não encontrada'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    editoraController.putEditora
  );
};
