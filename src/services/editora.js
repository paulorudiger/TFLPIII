const db = require("../configs/pg");

const sql_get = `
    SELECT ideditora, nomeEditora, endereco 
    FROM editora`;

const getEditora = async () => {
  let editoras = {};
  await db
    .query(sql_get)
    .then((ret) => (editoras = { total: ret.rows.length, editoras: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return editoras;
};

const sql_insert = `
    INSERT INTO editora (nomeEditora, endereco) 
    VALUES ($1, $2) RETURNING *`;

const postEditora = async (params) => {
  const { nomeEditora, endereco } = params;
  try {
    const result = await db.query(sql_insert, [nomeEditora, endereco]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Editora criada com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.constraint === "editora_nomeeditora_key") {
      throw {
        status: 409,
        message: `Nome da Editora ("${nomeEditora}") já existe.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar a Editora. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM editora
    WHERE ideditora = $1`;

const deleteEditora = async (params) => {
  const { ideditora } = params;
  try {
    const result = await db.query(sql_delete, [ideditora]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Editora deletada com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Editora com o idempresa ${params.ideditora} não encontrada`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar a Editora" };
  }
};

const sql_patch = `
    UPDATE editora
    SET`;

const patchEditora = async (params) => {
  let fields = "";
  let binds = [params.ideditora];
  let countParams = 1;

  if (params.nomeEditora) {
    countParams++;
    fields += ` nomeEditora = $${countParams} `;
    binds.push(params.nomeEditora);
  }
  if (params.endereco) {
    countParams++;
    fields += (fields ? "," : "") + ` endereco = $${countParams} `;
    binds.push(params.endereco);
  }

  let sql = sql_patch + fields + " WHERE ideditora = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Editora atualizada com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Editora com o idempresa ${params.ideditora} não encontrada`,
      };
    }
    if (err.constraint === "editora_nomeeditora_key") {
      throw {
        status: 409,
        message: `Nome da Editora ("${nomeEditora}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar a Editora" };
  }
};

const sql_put = `
    UPDATE editora
    SET nomeEditora = $2,
        endereco = $3
    WHERE ideditora = $1`;

const putEditora = async (params) => {
  const { ideditora, nomeEditora, endereco } = params;
  try {
    const result = await db.query(sql_put, [ideditora, nomeEditora, endereco]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Editora atualizada com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Editora com o idempresa ${params.ideditora} não encontrada`,
      };
    }
    if (err.constraint === "editora_nomeeditora_key") {
      throw {
        status: 409,
        message: `Nome da Editora ("${nomeEditora}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar a Editora" };
  }
};

module.exports.getEditora = getEditora;
module.exports.postEditora = postEditora;
module.exports.deleteEditora = deleteEditora;
module.exports.patchEditora = patchEditora;
module.exports.putEditora = putEditora;
