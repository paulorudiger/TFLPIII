const db = require("../configs/pg");

const sql_get = `
    SELECT idgenero, nomeGenero 
    FROM genero`;

const getGenero = async () => {
  let generos = {};
  await db
    .query(sql_get)
    .then((ret) => (generos = { total: ret.rows.length, generos: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return generos;
};

const sql_insert = `
    INSERT INTO genero (nomeGenero) 
    VALUES ($1) RETURNING *`;

const postGenero = async (params) => {
  const { nomeGenero } = params;
  try {
    const result = await db.query(sql_insert, [nomeGenero]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Gênero criado com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.constraint === "genero_nomegenero_key") {
      throw {
        status: 409,
        message: `Nome do Gênero ("${nomeGenero}") já existe.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o Gênero. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM genero
    WHERE idgenero = $1`;

const deleteGenero = async (params) => {
  const { idgenero } = params;
  try {
    const result = await db.query(sql_delete, [idgenero]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Gênero deletado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Gênero com o id ${params.idgenero} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar o Gênero" };
  }
};

const sql_patch = `
    UPDATE genero
    SET`;

const patchGenero = async (params) => {
  let fields = "";
  let binds = [params.idgenero];
  let countParams = 1;

  if (params.nomeGenero) {
    countParams++;
    fields += ` nomeGenero = $${countParams} `;
    binds.push(params.nomeGenero);
  }

  let sql = sql_patch + fields + " WHERE idgenero = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Gênero atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Gênero com o id ${params.idgenero} não encontrado`,
      };
    }
    if (err.constraint === "genero_nomegenero_key") {
      throw {
        status: 409,
        message: `Nome do Gênero ("${params.nomeGenero}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o Gênero" };
  }
};

const sql_put = `
    UPDATE genero
    SET nomeGenero = $2
    WHERE idgenero = $1`;

const putGenero = async (params) => {
  const { idgenero, nomeGenero } = params;
  try {
    const result = await db.query(sql_put, [idgenero, nomeGenero]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Gênero atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Gênero com o id ${params.idgenero} não encontrado`,
      };
    }
    if (err.constraint === "genero_nomegenero_key") {
      throw {
        status: 409,
        message: `Nome do Gênero ("${nomeGenero}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o Gênero" };
  }
};

module.exports.getGenero = getGenero;
module.exports.postGenero = postGenero;
module.exports.deleteGenero = deleteGenero;
module.exports.patchGenero = patchGenero;
module.exports.putGenero = putGenero;
