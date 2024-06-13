const livroAutorController = require("../controllers/livro_autor");

module.exports = (app) => {
  app.get(
    "/livro_autor",
    /* 
    #swagger.tags = ["Livro_Autor"]
    #swagger.summary = "Consulta lista de associações livro-autor."
    #swagger.description = "Rota para consultar a lista de todas as associações livro-autor."
    #swagger.responses[200] = {
      description: 'Lista de associações livro-autor obtida com sucesso',
      schema: [{ idlivro: 1, idautor: 1, nomeLivro: "Livro Exemplo", nomeAutor: "Autor Exemplo" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    livroAutorController.getLivroAutor
  );

  app.post(
    "/livro_autor",
    /* 
    #swagger.tags = ["Livro_Autor"]
    #swagger.summary = "Cria uma nova associação livro-autor."
    #swagger.description = "Rota para criar uma nova associação entre livro e autor."
    #swagger.parameters['json'] = {
      description: 'Dados para criar uma nova associação livro-autor',
      in: 'body',
      required: true,
      schema: {
        idlivro: 1,
        idautor: 1
      }
    }
    #swagger.responses[201] = {
      description: 'Associação livro-autor criada com sucesso',
      schema: { idlivro: 1, idautor: 1 }
    }
    #swagger.responses[409] = {
      description: 'Associação livro-autor já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    livroAutorController.postLivroAutor
  );

  app.delete(
    "/livro_autor",
    /* 
    #swagger.tags = ["Livro_Autor"]
    #swagger.summary = "Remove uma associação livro-autor."
    #swagger.description = "Rota para remover uma associação entre livro e autor."
    #swagger.parameters['json'] = {
      description: 'Dados para remover a associação livro-autor',
      in: 'body',
      required: true,
      schema: {
        idlivro: 1,
        idautor: 1
      }
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Associação livro-autor removida com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Associação livro-autor não encontrada'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    livroAutorController.deleteLivroAutor
  );
};
