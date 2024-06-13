const db = require("../configs/pg");

const sql_get = `
    SELECT 
        la.idlivro, la.idautor,
        l.nome AS nomeLivro,
        a.nome AS nomeAutor
    FROM 
        livro_autor la
    JOIN 
        livro l ON la.idlivro = l.idlivro
    JOIN 
        autor a ON la.idautor = a.idautor`;

const getLivroAutor = async () => {
  let livroAutor = {};
  await db
    .query(sql_get)
    .then(
      (ret) => (livroAutor = { total: ret.rows.length, livro_autor: ret.rows })
    )
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return livroAutor;
};

const sql_insert = `
    INSERT INTO livro_autor (idlivro, idautor) 
    VALUES ($1, $2) RETURNING *`;

const postLivroAutor = async (params) => {
  const { idlivro, idautor } = params;
  try {
    const result = await db.query(sql_insert, [idlivro, idautor]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return {
      mensagem: "Associação livro-autor criada com sucesso!",
      result: result.rows[0],
    };
  } catch (err) {
    if (err.constraint === "livro_autor_pkey") {
      throw {
        status: 409,
        message: `Associação entre livro (${idlivro}) e autor (${idautor}) já existe.`,
      };
    }
    throw {
      status: 500,
      message:
        "Erro ao tentar criar a associação livro-autor. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM livro_autor
    WHERE idlivro = $1 AND idautor = $2`;

const deleteLivroAutor = async (params) => {
  const { idlivro, idautor } = params;
  try {
    const result = await db.query(sql_delete, [idlivro, idautor]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Associação livro-autor deletada com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Associação entre livro (${idlivro}) e autor (${idautor}) não encontrada.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar deletar a associação livro-autor",
    };
  }
};

module.exports.getLivroAutor = getLivroAutor;
module.exports.postLivroAutor = postLivroAutor;
module.exports.deleteLivroAutor = deleteLivroAutor;
