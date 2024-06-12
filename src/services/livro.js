const db = require("../configs/pg");

const sql_get = `
    SELECT idlivro, ideditora, idgenero, nome, disponivel, anoPublicacao 
    FROM livro`;

const getLivro = async () => {
  let livros = {};
  await db
    .query(sql_get)
    .then((ret) => (livros = { total: ret.rows.length, livros: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return livros;
};

const sql_insert = `
    INSERT INTO livro (ideditora, idgenero, nome, disponivel, anoPublicacao) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;

const postLivro = async (params) => {
  const { ideditora, idgenero, nome, disponivel, anoPublicacao } = params;
  try {
    const result = await db.query(sql_insert, [
      ideditora,
      idgenero,
      nome,
      disponivel,
      anoPublicacao,
    ]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Livro criado com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Livro com o id ${params.idgenero} não encontrado`,
      };
    }
    if (err.constraint === "livro_nome_key") {
      throw {
        status: 409,
        message: `Nome do Livro ("${nome}") já existe.`,
      };
    }

    if (err.constraint === "livro_ideditora_fkey") {
      throw {
        status: 400,
        message: `Editora com o id ${ideditora} não encontrada.`,
      };
    }

    if (err.constraint === "livro_idgenero_fkey") {
      throw {
        status: 400,
        message: `Genero com o id ${idgenero} não encontrado.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o Livro. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM livro
    WHERE idlivro = $1`;

const deleteLivro = async (params) => {
  const { idlivro } = params;
  try {
    const result = await db.query(sql_delete, [idlivro]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Livro deletado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Livro com o id ${params.idlivro} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar o Livro" };
  }
};

const sql_patch = `
    UPDATE livro
    SET`;

const patchLivro = async (params) => {
  let fields = "";
  let binds = [params.idlivro];
  let countParams = 1;

  if (params.ideditora) {
    countParams++;
    fields += ` ideditora = $${countParams} `;
    binds.push(params.ideditora);
  }
  if (params.idgenero) {
    countParams++;
    fields += (fields ? "," : "") + ` idgenero = $${countParams} `;
    binds.push(params.idgenero);
  }
  if (params.nome) {
    countParams++;
    fields += (fields ? "," : "") + ` nome = $${countParams} `;
    binds.push(params.nome);
  }
  if (params.disponivel !== undefined) {
    countParams++;
    fields += (fields ? "," : "") + ` disponivel = $${countParams} `;
    binds.push(params.disponivel);
  }
  if (params.anoPublicacao) {
    countParams++;
    fields += (fields ? "," : "") + ` anoPublicacao = $${countParams} `;
    binds.push(params.anoPublicacao);
  }

  let sql = sql_patch + fields + " WHERE idlivro = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Livro atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Livro com o id ${params.idgenero} não encontrado`,
      };
    }
    if (err.constraint === "livro_nome_key") {
      throw {
        status: 409,
        message: `Nome do Livro ("${params.nome}") já existe.`,
      };
    }

    if (err.constraint === "livro_ideditora_fkey") {
      throw {
        status: 400,
        message: `Editora com o id ${params.ideditora} não encontrada.`,
      };
    }

    if (err.constraint === "livro_idgenero_fkey") {
      throw {
        status: 400,
        message: `Genero com o id ${params.idgenero} não encontrado.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o Livro. [" + err.message + "]",
    };
  }
};

const sql_put = `
    UPDATE livro
    SET ideditora = $2,
        idgenero = $3,
        nome = $4,
        disponivel = $5,
        anoPublicacao = $6
    WHERE idlivro = $1`;

const putLivro = async (params) => {
  const { idlivro, ideditora, idgenero, nome, disponivel, anoPublicacao } =
    params;
  try {
    const result = await db.query(sql_put, [
      idlivro,
      ideditora,
      idgenero,
      nome,
      disponivel,
      anoPublicacao,
    ]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Livro atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Livro com o id ${params.idgenero} não encontrado`,
      };
    }
    if (err.constraint === "livro_nome_key") {
      throw {
        status: 409,
        message: `Nome do Livro ("${params.nome}") já existe.`,
      };
    }

    if (err.constraint === "livro_ideditora_fkey") {
      throw {
        status: 400,
        message: `Editora com o id ${params.ideditora} não encontrada.`,
      };
    }

    if (err.constraint === "livro_idgenero_fkey") {
      throw {
        status: 400,
        message: `Genero com o id ${params.idgenero} não encontrado.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o Livro. [" + err.message + "]",
    };
  }
};

module.exports.getLivro = getLivro;
module.exports.postLivro = postLivro;
module.exports.deleteLivro = deleteLivro;
module.exports.patchLivro = patchLivro;
module.exports.putLivro = putLivro;
