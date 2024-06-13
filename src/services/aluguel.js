const db = require("../configs/pg");

const sql_get = `
    SELECT idaluguel, idusuario, idlivro, dataAluguel, dataDevolucao, devolvido 
    FROM aluguel`;

const getAluguel = async () => {
  let alugueis = {};
  await db
    .query(sql_get)
    .then((ret) => (alugueis = { total: ret.rows.length, alugueis: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return alugueis;
};

const sql_check_livro_devolvido = `
    SELECT devolvido 
    FROM aluguel 
    WHERE idlivro = $1 AND devolvido = false`;

const sql_insert = `
    INSERT INTO aluguel (idusuario, idlivro, dataAluguel, dataDevolucao, devolvido) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;

const postAluguel = async (params) => {
  const { idusuario, idlivro, dataAluguel, dataDevolucao, devolvido } = params;
  try {
    const result = await db.query(sql_insert, [
      idusuario,
      idlivro,
      dataAluguel,
      dataDevolucao,
      devolvido,
    ]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    // TODO: verifdicar se o livro ja foi devolvido antes de criar novo aluguel
    const checkResult = await db.query(sql_check_livro_devolvido, [idlivro]);
    // if (checkResult.rowCount > 0) {
    //   throw new Error("Livro indisponivel");
    // }
    return { mensagem: "Aluguel criado com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.message === "Livro indisponivel") {
      throw {
        status: 409,
        message: `O livro com ID (${idlivro}) já está alugado e não foi devolvido.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o aluguel. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM aluguel
    WHERE idaluguel = $1`;

const deleteAluguel = async (params) => {
  const { idaluguel } = params;
  try {
    const result = await db.query(sql_delete, [idaluguel]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Aluguel deletado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Aluguel com o id ${params.idaluguel} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar o aluguel" };
  }
};

const sql_patch = `
    UPDATE aluguel
    SET`;

const patchAluguel = async (params) => {
  let fields = "";
  let binds = [params.idaluguel];
  let countParams = 1;

  if (params.idusuario) {
    countParams++;
    fields += ` idusuario = $${countParams} `;
    binds.push(params.idusuario);
  }
  if (params.idlivro) {
    countParams++;
    fields += (fields ? "," : "") + ` idlivro = $${countParams} `;
    binds.push(params.idlivro);
  }
  if (params.dataAluguel) {
    countParams++;
    fields += (fields ? "," : "") + ` dataAluguel = $${countParams} `;
    binds.push(params.dataAluguel);
  }
  if (params.dataDevolucao) {
    countParams++;
    fields += (fields ? "," : "") + ` dataDevolucao = $${countParams} `;
    binds.push(params.dataDevolucao);
  }
  if (params.devolvido !== undefined) {
    countParams++;
    fields += (fields ? "," : "") + ` devolvido = $${countParams} `;
    binds.push(params.devolvido);
  }

  let sql = sql_patch + fields + " WHERE idaluguel = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    // TODO: verificar se o livro ja foi devolvido antes de criar novo aluguel
    return { mensagem: "Aluguel atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Aluguel com o id ${params.idaluguel} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o aluguel" };
  }
};

const sql_put = `
    UPDATE aluguel
    SET idusuario = $2,
        idlivro = $3,
        dataAluguel = $4,
        dataDevolucao = $5,
        devolvido = $6
    WHERE idaluguel = $1`;

const putAluguel = async (params) => {
  const {
    idaluguel,
    idusuario,
    idlivro,
    dataAluguel,
    dataDevolucao,
    devolvido,
  } = params;
  try {
    const result = await db.query(sql_put, [
      idaluguel,
      idusuario,
      idlivro,
      dataAluguel,
      dataDevolucao,
      devolvido,
    ]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    // TODO: verificar se o livro ja foi devolvido antes de criar novo aluguel
    return { mensagem: "Aluguel atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Aluguel com o id ${params.idaluguel} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o aluguel" };
  }
};

module.exports.getAluguel = getAluguel;
module.exports.postAluguel = postAluguel;
module.exports.deleteAluguel = deleteAluguel;
module.exports.patchAluguel = patchAluguel;
module.exports.putAluguel = putAluguel;
