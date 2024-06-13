const db = require("../configs/pg");

const sql_get = `
    SELECT idusuario, usuario, nome, email 
    FROM usuario`;

const getUsuario = async () => {
  let usuarios = {};
  await db
    .query(sql_get)
    .then((ret) => (usuarios = { total: ret.rows.length, usuarios: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return usuarios;
};

const sql_get_by_id = `
    SELECT idusuario, usuario, nome, email 
    FROM usuario
    WHERE idusuario = $1`;

const getUsuarioByIdusuario = async (idusuario) => {
  let usuario = {};
  await db
    .query(sql_get_by_id, [idusuario])
    .then((ret) => {
      if (ret.rows.length === 0) {
        return false;
      } else {
        return (usuario = ret.rows[0]);
      }
    })
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  //return usuario;
};

const sql_insert = `
    INSERT INTO usuario (usuario, senha, nome, email) 
    VALUES ($1, $2, $3, $4) RETURNING *`;

const postUsuario = async (params) => {
  const { usuario, senha, nome, email } = params;
  try {
    const result = await db.query(sql_insert, [usuario, senha, nome, email]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Usuário criado com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.constraint === "usuario_usuario_key") {
      throw {
        status: 409,
        message: `Nome de usuário ("${usuario}") já existe.`,
      };
    }
    if (err.constraint === "usuario_email_key") {
      throw {
        status: 409,
        message: `Email ("${email}") já existe.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o usuário. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM usuario
    WHERE idusuario = $1`;

const deleteUsuario = async (params) => {
  const { idusuario } = params;
  try {
    const result = await db.query(sql_delete, [idusuario]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Usuário deletado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Usuário com o id ${params.idusuario} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar o usuário" };
  }
};

const sql_patch = `
    UPDATE usuario
    SET`;

const patchUsuario = async (params) => {
  let fields = "";
  let binds = [params.idusuario];
  let countParams = 1;

  if (params.usuario) {
    countParams++;
    fields += ` usuario = $${countParams} `;
    binds.push(params.usuario);
  }
  if (params.senha) {
    countParams++;
    fields += (fields ? "," : "") + ` senha = $${countParams} `;
    binds.push(params.senha);
  }
  if (params.nome) {
    countParams++;
    fields += (fields ? "," : "") + ` nome = $${countParams} `;
    binds.push(params.nome);
  }
  if (params.email) {
    countParams++;
    fields += (fields ? "," : "") + ` email = $${countParams} `;
    binds.push(params.email);
  }

  let sql = sql_patch + fields + " WHERE idusuario = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Usuário atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Usuário com o id ${params.idusuario} não encontrado`,
      };
    }
    if (err.constraint === "usuario_usuario_key") {
      throw {
        status: 409,
        message: `Nome de usuário ("${params.usuario}") já existe.`,
      };
    }
    if (err.constraint === "usuario_email_key") {
      throw {
        status: 409,
        message: `Email ("${params.email}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o usuário" };
  }
};

const sql_put = `
    UPDATE usuario
    SET usuario = $2,
        senha = $3,
        nome = $4,
        email = $5
    WHERE idusuario = $1`;

const putUsuario = async (params) => {
  const { idusuario, usuario, senha, nome, email } = params;
  try {
    const result = await db.query(sql_put, [
      idusuario,
      usuario,
      senha,
      nome,
      email,
    ]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Usuário atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Usuário com o id ${params.idusuario} não encontrado`,
      };
    }
    if (err.constraint === "usuario_usuario_key") {
      throw {
        status: 409,
        message: `Nome de usuário ("${usuario}") já existe.`,
      };
    }
    if (err.constraint === "usuario_email_key") {
      throw {
        status: 409,
        message: `Email ("${email}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o usuário" };
  }
};

module.exports.getUsuario = getUsuario;
module.exports.getUsuarioByIdusuario = getUsuarioByIdusuario;
module.exports.postUsuario = postUsuario;
module.exports.deleteUsuario = deleteUsuario;
module.exports.patchUsuario = patchUsuario;
module.exports.putUsuario = putUsuario;
