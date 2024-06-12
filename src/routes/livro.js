const livroController = require("../controllers/livro.js");

module.exports = (app) => {
  app.get(
    "/livro",
    /* 
    #swagger.tags = ["Livro"]
    #swagger.summary = "Consulta lista de livros."
    #swagger.description = "Rota para consultar a lista de todos os livros cadastrados."
    #swagger.responses[200] = {
      description: 'Lista de livros obtida com sucesso',
      schema: [{ id: 1, nome: "Livro Exemplo", disponivel: true, anoPublicacao: 2020 }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    livroController.getLivro
  );

  app.post(
    "/livro",
    /* 
    #swagger.tags = ["Livro"]
    #swagger.summary = "Insere um novo livro."
    #swagger.description = "Rota para inserir um novo livro no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir um novo livro',
      in: 'body',
      required: true,
      schema: {
        ideditora: 1,
        idgenero: 1,
        nome: "Livro Exemplo",
        disponivel: true,
        anoPublicacao: 2020
      }
    }
    #swagger.responses[201] = {
      description: 'Livro criado com sucesso',
      schema: { id: 1, ideditora: 1, idgenero: 1, nome: "Livro Exemplo", disponivel: true, anoPublicacao: 2020 }
    }
       #swagger.responses[400] = {
      description: 'O id informado nas chaves estrangeiras (idgenero ou ideditora) não existe.'
    }
       #swagger.responses[404] = {
       description: 'Livro não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Nome do livro já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    livroController.postLivro
  );

  app.delete(
    "/livro/:idlivro",
    /* 
    #swagger.tags = ["Livro"]
    #swagger.summary = "Remove um livro."
    #swagger.description = "Rota para remover um livro do sistema pelo ID."
    #swagger.parameters['idlivro'] = {
      description: 'ID do livro',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Livro removido com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Livro não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    livroController.deleteLivro
  );

  app.patch(
    "/livro/:idlivro",
    /* 
    #swagger.tags = ["Livro"]
    #swagger.summary = "Atualiza parcialmente um livro."
    #swagger.description = "Rota para atualizar parcialmente um livro pelo ID."
    #swagger.parameters['idlivro'] = {
      description: 'ID do livro',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar o livro',
      in: 'body',
      required: true,
      schema: {
        ideditora: 1,
        idgenero: 1,
        nome: "Livro Exemplo",
        disponivel: true,
        anoPublicacao: 2020
      }
    }
    #swagger.responses[200] = {
      description: 'Livro atualizado com sucesso',
      schema: { id: 1, ideditora: 1, idgenero: 1, nome: "Livro Exemplo", disponivel: true, anoPublicacao: 2020 }
    }
      #swagger.responses[400] = {
      description: 'O id informado nas chaves estrangeiras (idgenero ou ideditora) não existe.'
    }
       #swagger.responses[404] = {
       description: 'Livro não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Nome do livro já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    livroController.patchLivro
  );

  app.put(
    "/livro/:idlivro",
    /* 
    #swagger.tags = ["Livro"]
    #swagger.summary = "Atualiza todos os dados de um livro."
    #swagger.description = "Rota para atualizar todos os dados de um livro pelo ID."
    #swagger.parameters['idlivro'] = {
      description: 'ID do livro',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir o livro',
      in: 'body',
      required: true,
      schema: {
        ideditora: 1,
        idgenero: 1,
        nome: "Livro Exemplo",
        disponivel: true,
        anoPublicacao: 2020
      }
    }
    #swagger.responses[200] = {
      description: 'Livro substituído com sucesso',
      schema: { id: 1, ideditora: 1, idgenero: 1, nome: "Livro Exemplo", disponivel: true, anoPublicacao: 2020 }
    }
      #swagger.responses[400] = {
      description: 'O id informado nas chaves estrangeiras (idgenero ou ideditora) não existe.'
    }
       #swagger.responses[404] = {
       description: 'Livro não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Nome do livro já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    livroController.putLivro
  );
};
