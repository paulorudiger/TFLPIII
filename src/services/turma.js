const db = require("../configs/pg");

const sql_get = `
    SELECT idturma, nome, turno 
    FROM turma`;

const getTurma = async () => {
  let turmas = {};
  await db
    .query(sql_get)
    .then((ret) => (turmas = { total: ret.rows.length, turmas: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return turmas;
};

const sql_insert = `
    INSERT INTO turma (nome, turno) 
    VALUES ($1, $2) RETURNING *`;

const postTurma = async (params) => {
  const { nome, turno } = params;
  try {
    const result = await db.query(sql_insert, [nome, turno]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Turma criada com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.constraint === "turma_nome_key") {
      throw {
        status: 409,
        message: `Nome da Turma ("${nome}") já existe.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar a Turma. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM turma
    WHERE idturma = $1`;

const deleteTurma = async (params) => {
  const { idturma } = params;
  try {
    const result = await db.query(sql_delete, [idturma]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Turma deletada com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Turma com o id ${params.idturma} não encontrada`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar a Turma" };
  }
};

const sql_patch = `
    UPDATE turma
    SET`;

const patchTurma = async (params) => {
  let fields = "";
  let binds = [params.idturma];
  let countParams = 1;

  if (params.nome) {
    countParams++;
    fields += ` nome = $${countParams} `;
    binds.push(params.nome);
  }
  if (params.turno) {
    countParams++;
    fields += (fields ? "," : "") + ` turno = $${countParams} `;
    binds.push(params.turno);
  }

  let sql = sql_patch + fields + " WHERE idturma = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Turma atualizada com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Turma com o id ${params.idturma} não encontrada`,
      };
    }
    if (err.constraint === "turma_nome_key") {
      throw {
        status: 409,
        message: `Nome da Turma ("${params.nome}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar a Turma" };
  }
};

const sql_put = `
    UPDATE turma
    SET nome = $2,
        turno = $3
    WHERE idturma = $1`;

const putTurma = async (params) => {
  const { idturma, nome, turno } = params;
  try {
    const result = await db.query(sql_put, [idturma, nome, turno]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Turma atualizada com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Turma com o id ${params.idturma} não encontrada`,
      };
    }
    if (err.constraint === "turma_nome_key") {
      throw {
        status: 409,
        message: `Nome da Turma ("${nome}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar a Turma" };
  }
};

module.exports.getTurma = getTurma;
module.exports.postTurma = postTurma;
module.exports.deleteTurma = deleteTurma;
module.exports.patchTurma = patchTurma;
module.exports.putTurma = putTurma;
