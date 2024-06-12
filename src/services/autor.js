const db = require("../configs/pg");

const sql_get = `
    SELECT idautor, nome, nacionalidade 
    FROM autor`;

const getAutor = async () => {
  let autores = {};
  await db
    .query(sql_get)
    .then((ret) => (autores = { total: ret.rows.length, autores: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return autores;
};

const sql_insert = `
    INSERT INTO autor (nome, nacionalidade) 
    VALUES ($1, $2) RETURNING *`;

const postAutor = async (params) => {
  const { nome, nacionalidade } = params;
  try {
    const result = await db.query(sql_insert, [nome, nacionalidade]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Autor criado com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.constraint === "autor_nome_key") {
      throw {
        status: 409,
        message: `Nome do Autor ("${nome}") já existe.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o Autor. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM autor
    WHERE idautor = $1`;

const deleteAutor = async (params) => {
  const { idautor } = params;
  try {
    const result = await db.query(sql_delete, [idautor]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Autor deletado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Autor com o id ${params.idautor} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar o Autor" };
  }
};

const sql_patch = `
    UPDATE autor
    SET`;

const patchAutor = async (params) => {
  let fields = "";
  let binds = [params.idautor];
  let countParams = 1;

  if (params.nome) {
    countParams++;
    fields += ` nome = $${countParams} `;
    binds.push(params.nome);
  }
  if (params.nacionalidade) {
    countParams++;
    fields += (fields ? "," : "") + ` nacionalidade = $${countParams} `;
    binds.push(params.nacionalidade);
  }

  let sql = sql_patch + fields + " WHERE idautor = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Autor atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Autor com o id ${params.idautor} não encontrado`,
      };
    }
    if (err.constraint === "autor_nome_key") {
      throw {
        status: 409,
        message: `Nome do Autor ("${params.nome}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o Autor" };
  }
};

const sql_put = `
    UPDATE autor
    SET nome = $2,
        nacionalidade = $3
    WHERE idautor = $1`;

const putAutor = async (params) => {
  const { idautor, nome, nacionalidade } = params;
  try {
    const result = await db.query(sql_put, [idautor, nome, nacionalidade]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Autor atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Autor com o id ${params.idautor} não encontrado`,
      };
    }
    if (err.constraint === "autor_nome_key") {
      throw {
        status: 409,
        message: `Nome do Autor ("${nome}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o Autor" };
  }
};

module.exports.getAutor = getAutor;
module.exports.postAutor = postAutor;
module.exports.deleteAutor = deleteAutor;
module.exports.patchAutor = patchAutor;
module.exports.putAutor = putAutor;
