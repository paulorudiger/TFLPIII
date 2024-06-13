const usuarioController = require("../controllers/usuario");

module.exports = (app) => {
  app.get(
    "/usuario/login/:usuario/:senha",
    /* 
    #swagger.tags = ["Usuario"]
    #swagger.summary = "Login de usuário."
    #swagger.description = "Rota para login de usuário."
    #swagger.parameters['usuario'] = {
      description: 'Nome de usuário',
      in: 'path',
      required: true,
      type: 'string',
      example: 'usuarioExemplo'
    }
    #swagger.parameters['senha'] = {
      description: 'Senha do usuário',
      in: 'path',
      required: true,
      type: 'string',
      example: 'senhaExemplo'
    }
    #swagger.responses[200] = {
      description: 'Login realizado com sucesso',
      schema: { idusuario: 1, usuario: "usuarioExemplo", nome: "Nome Exemplo", email: "email@exemplo.com" }
    }
    #swagger.responses[401] = {
      description: 'Credenciais inválidas'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    usuarioController.loginUsuario
  );

  app.get(
    "/usuario",
    /* 
    #swagger.tags = ["Usuario"]
    #swagger.summary = "Consulta lista de usuários."
    #swagger.description = "Rota para consultar a lista de todos os usuários cadastrados."
    #swagger.responses[200] = {
      description: 'Lista de usuários obtida com sucesso',
      schema: [{ idusuario: 1, usuario: "usuarioExemplo", nome: "Nome Exemplo", email: "email@exemplo.com" }]
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    usuarioController.getUsuario
  );

  app.get(
    "/usuario/:idusuario",
    /* 
    #swagger.tags = ["Usuario"]
    #swagger.summary = "Consulta um usuário pelo ID."
    #swagger.description = "Rota para consultar um usuário pelo ID."
    #swagger.parameters['idusuario'] = {
      description: 'ID do usuário',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[200] = {
      description: 'Usuário obtido com sucesso',
      schema: { idusuario: 1, usuario: "usuarioExemplo", nome: "Nome Exemplo", email: "email@exemplo.com" }
    }
    #swagger.responses[404] = {
      description: 'Usuário não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    usuarioController.getUsuarioByIdusuario
  );

  app.post(
    "/usuario",
    /* 
    #swagger.tags = ["Usuario"]
    #swagger.summary = "Insere um novo usuário."
    #swagger.description = "Rota para inserir um novo usuário no sistema."
    #swagger.parameters['json'] = {
      description: 'Dados para inserir um novo usuário',
      in: 'body',
      required: true,
      schema: {
        usuario: "usuarioExemplo",
        senha: "senhaExemplo",
        nome: "Nome Exemplo",
        email: "email@exemplo.com"
      }
    }
    #swagger.responses[201] = {
      description: 'Usuário criado com sucesso',
      schema: { idusuario: 1, usuario: "usuarioExemplo", nome: "Nome Exemplo", email: "email@exemplo.com" }
    }
    #swagger.responses[409] = {
      description: 'Usuário ou email já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    usuarioController.postUsuario
  );

  app.delete(
    "/usuario/:idusuario",
    /* 
    #swagger.tags = ["Usuario"]
    #swagger.summary = "Remove um usuário."
    #swagger.description = "Rota para remover um usuário do sistema pelo ID."
    #swagger.parameters['idusuario'] = {
      description: 'ID do usuário',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.responses[204] = {
      description: 'Nenhum conteúdo (Usuário removido com sucesso)'
    }
    #swagger.responses[404] = {
      description: 'Usuário não encontrado'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    usuarioController.deleteUsuario
  );

  app.patch(
    "/usuario/:idusuario",
    /* 
    #swagger.tags = ["Usuario"]
    #swagger.summary = "Atualiza parcialmente um usuário."
    #swagger.description = "Rota para atualizar parcialmente um usuário pelo ID. É possível alterar o nome, senha, email e nome de usuário."
    #swagger.parameters['idusuario'] = {
      description: 'ID do usuário',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para atualizar o usuário',
      in: 'body',
      required: true,
      schema: {
        usuario: "usuarioExemplo",
        senha: "senhaExemplo",
        nome: "Nome Exemplo",
        email: "email@exemplo.com"
      }
    }
    #swagger.responses[200] = {
      description: 'Usuário atualizado com sucesso',
      schema: { idusuario: 1, usuario: "usuarioExemplo", nome: "Nome Exemplo", email: "email@exemplo.com" }
    }
    #swagger.responses[404] = {
      description: 'Usuário não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Usuário ou email já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    usuarioController.patchUsuario
  );

  app.put(
    "/usuario/:idusuario",
    /* 
    #swagger.tags = ["Usuario"]
    #swagger.summary = "Atualiza todos os dados de um usuário."
    #swagger.description = "Rota para atualizar todos os dados de um usuário pelo ID. É possível alterar o nome, senha, email e nome de usuário."
    #swagger.parameters['idusuario'] = {
      description: 'ID do usuário',
      in: 'path',
      required: true,
      type: 'integer',
      example: 1
    }
    #swagger.parameters['json'] = {
      description: 'Dados para substituir o usuário',
      in: 'body',
      required: true,
      schema: {
        usuario: "usuarioExemplo",
        senha: "senhaExemplo",
        nome: "Nome Exemplo",
        email: "email@exemplo.com"
      }
    }
    #swagger.responses[200] = {
      description: 'Usuário substituído com sucesso',
      schema: { idusuario: 1, usuario: "usuarioExemplo", nome: "Nome Exemplo", email: "email@exemplo.com" }
    }
    #swagger.responses[404] = {
      description: 'Usuário não encontrado'
    }
    #swagger.responses[409] = {
      description: 'Usuário ou email já existe'
    }
    #swagger.responses[500] = {
      description: 'Erro no servidor'
    }
    */
    usuarioController.putUsuario
  );
};
