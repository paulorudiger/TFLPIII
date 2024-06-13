const db = require("../configs/pg");

// const sql_get = `
//     SELECT 
//         at.idaluno, at.idturma, at.ano,
//         t.nome AS nomeTurma, t.turno,
//         a.matricula, u.nome AS nomeAluno
//     FROM 
//         aluno_turma at
//     JOIN 
//         turma t ON at.idturma = t.idturma
//     JOIN 
//         aluno a ON at.idaluno = a.idaluno
//     JOIN 
//         usuario u ON a.idusuario = u.idusuario`;
const sql_get = `
    SELECT 
        at.idaluno, at.idturma, at.ano
    FROM 
        aluno_turma at`;
const getAlunoTurma = async () => {
  let alunoTurma = {};
  await db
    .query(sql_get)
    .then(
      (ret) => (alunoTurma = { total: ret.rows.length, aluno_turma: ret.rows })
    )
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return alunoTurma;
};

const sql_insert = `
    INSERT INTO aluno_turma (idaluno, idturma, ano) 
    VALUES ($1, $2, $3) RETURNING *`;

const postAlunoTurma = async (params) => {
  const { idaluno, idturma, ano } = params;
  try {
    const result = await db.query(sql_insert, [idaluno, idturma, ano]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return {
      mensagem: "Associação aluno-turma criada com sucesso!",
      result: result.rows[0],
    };
  } catch (err) {
    if (err.constraint === "aluno_turma_pkey") {
      throw {
        status: 409,
        message: `Associação entre aluno (${idaluno}) e turma (${idturma}) já existe.`,
      };
    }
    throw {
      status: 500,
      message:
        "Erro ao tentar criar a associação aluno-turma. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM aluno_turma
    WHERE idaluno = $1 AND idturma = $2`;

const deleteAlunoTurma = async (params) => {
  const { idaluno, idturma } = params;
  try {
    const result = await db.query(sql_delete, [idaluno, idturma]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Associação aluno-turma deletada com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Associação entre aluno (${idaluno}) e turma (${idturma}) não encontrada.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar deletar a associação aluno-turma",
    };
  }
};

module.exports.getAlunoTurma = getAlunoTurma;
module.exports.postAlunoTurma = postAlunoTurma;
module.exports.deleteAlunoTurma = deleteAlunoTurma;
