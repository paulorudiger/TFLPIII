const aluguelController = require("../controllers/aluguel.js");

module.exports = (app) => {
  app.get(
    "/aluguel",
    /* 
    #swagger.tags = ["Aluguel"]
    #swagger.summary = "Consulta lista de aluguéis."
    #swagger.description = "Rota para consultar a lista de todos os aluguéis cadastrados."
    #swagger.responses[200] = {
      description: 'Lista de aluguéis obtida com sucesso',
      schema: [{ idaluguel: 1, idusuario: 1, idlivro: 1, dataAluguel: "2024-01-01", dataDevolucao: "2024-01-10", devolvido: false }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    aluguelController.getAluguel
  );

  app.post(
    "/aluguel",
    /* 
    #swagger.tags = ["Aluguel"]
    #swagger.summary = "Insere um novo aluguel."
    #swagger.description = "Rota para inserir um novo aluguel no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir um novo aluguel',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        idlivro: 1,
        dataAluguel: "2024-01-01",
        dataDevolucao: "2024-01-10",
        devolvido: false
      }
    }
    #swagger.responses[201] = {
      description: 'Aluguel criado com sucesso',
      schema: { idaluguel: 1, idusuario: 1, idlivro: 1, dataAluguel: "2024-01-01", dataDevolucao: "2024-01-10", devolvido: false }
    }
    #swagger.responses[409] = {
      description: 'Aluguel já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    aluguelController.postAluguel
  );

  app.delete(
    "/aluguel/:idaluguel",
    /* 
    #swagger.tags = ["Aluguel"]
    #swagger.summary = "Remove um aluguel."
    #swagger.description = "Rota para remover um aluguel do sistema pelo ID."
    #swagger.parameters['idaluguel'] = {
      description: 'ID do aluguel',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Aluguel removido com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Aluguel não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    aluguelController.deleteAluguel
  );

  app.patch(
    "/aluguel/:idaluguel",
    /* 
    #swagger.tags = ["Aluguel"]
    #swagger.summary = "Atualiza parcialmente um aluguel."
    #swagger.description = "Rota para atualizar parcialmente um aluguel pelo ID."
    #swagger.parameters['idaluguel'] = {
      description: 'ID do aluguel',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar o aluguel',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        idlivro: 1,
        dataAluguel: "2024-01-01",
        dataDevolucao: "2024-01-10",
        devolvido: false
      }
    }
    #swagger.responses[200] = {
      description: 'Aluguel atualizado com sucesso',
      schema: { idaluguel: 1, idusuario: 1, idlivro: 1, dataAluguel: "2024-01-01", dataDevolucao: "2024-01-10", devolvido: false }
    }
    #swagger.responses[404] = {
      description: 'Aluguel não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Aluguel já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    aluguelController.patchAluguel
  );

  app.put(
    "/aluguel/:idaluguel",
    /* 
    #swagger.tags = ["Aluguel"]
    #swagger.summary = "Atualiza todos os dados de um aluguel."
    #swagger.description = "Rota para atualizar todos os dados de um aluguel pelo ID."
    #swagger.parameters['idaluguel'] = {
      description: 'ID do aluguel',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir o aluguel',
      in: 'body',
      required: true,
      schema: {
        idusuario: 1,
        idlivro: 1,
        dataAluguel: "2024-01-01",
        dataDevolucao: "2024-01-10",
        devolvido: false
      }
    }
    #swagger.responses[200] = {
      description: 'Aluguel substituído com sucesso',
      schema: { idaluguel: 1, idusuario: 1, idlivro: 1, dataAluguel: "2024-01-01", dataDevolucao: "2024-01-10", devolvido: false }
    }
    #swagger.responses[404] = {
      description: 'Aluguel não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Aluguel já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    aluguelController.putAluguel
  );
};
