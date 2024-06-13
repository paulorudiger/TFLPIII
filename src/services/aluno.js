const db = require("../configs/pg");
const usuarioService = require("../services/usuario");

const sql_get = `
    SELECT idaluno, idusuario, matricula, dataNascimento 
    FROM aluno`;

const getAluno = async () => {
  let alunos = {};
  await db
    .query(sql_get)
    .then((ret) => (alunos = { total: ret.rows.length, alunos: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return alunos;
};

const sql_insert = `
    INSERT INTO aluno (idusuario, matricula, dataNascimento) 
    VALUES ($1, $2, $3) RETURNING *`;

const postAluno = async (params) => {
  const { idusuario, matricula, dataNascimento } = params;
  try {
    const usuario = await usuarioService.getUsuarioByIdusuario(idusuario);
    if (!usuario) {
      throw new Error("Usuario não encontrado");
    }
    const result = await db.query(sql_insert, [
      idusuario,
      matricula,
      dataNascimento,
    ]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Aluno criado com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.message === "Usuario não encontrado") {
      throw {
        status: 404,
        message: `Usuário com o ID ${idusuario} não encontrado`,
      };
    }
    if (err.constraint === "aluno_matricula_key") {
      throw {
        status: 409,
        message: `Matrícula ("${matricula}") já existe.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o aluno. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM aluno
    WHERE idaluno = $1`;

const deleteAluno = async (params) => {
  const { idaluno } = params;
  try {
    const result = await db.query(sql_delete, [idaluno]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Aluno deletado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Aluno com o id ${params.idaluno} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar o aluno" };
  }
};

const sql_patch = `
    UPDATE aluno
    SET`;

const patchAluno = async (params) => {
  let fields = "";
  let binds = [params.idaluno];
  let countParams = 1;

  if (params.idusuario) {
    countParams++;
    fields += ` idusuario = $${countParams} `;
    binds.push(params.idusuario);
  }
  if (params.matricula) {
    countParams++;
    fields += (fields ? "," : "") + ` matricula = $${countParams} `;
    binds.push(params.matricula);
  }
  if (params.dataNascimento) {
    countParams++;
    fields += (fields ? "," : "") + ` dataNascimento = $${countParams} `;
    binds.push(params.dataNascimento);
  }

  let sql = sql_patch + fields + " WHERE idaluno = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Aluno atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Aluno com o id ${params.idaluno} não encontrado`,
      };
    }
    if (err.constraint === "aluno_matricula_key") {
      throw {
        status: 409,
        message: `Matrícula ("${params.matricula}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o aluno" };
  }
};

const sql_put = `
    UPDATE aluno
    SET idusuario = $2,
        matricula = $3,
        dataNascimento = $4
    WHERE idaluno = $1`;

const putAluno = async (params) => {
  const { idaluno, idusuario, matricula, dataNascimento } = params;
  try {
    const result = await db.query(sql_put, [
      idaluno,
      idusuario,
      matricula,
      dataNascimento,
    ]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Aluno atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Aluno com o id ${params.idaluno} não encontrado`,
      };
    }
    if (err.constraint === "aluno_matricula_key") {
      throw {
        status: 409,
        message: `Matrícula ("${matricula}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o aluno" };
  }
};

module.exports.getAluno = getAluno;
module.exports.postAluno = postAluno;
module.exports.deleteAluno = deleteAluno;
module.exports.patchAluno = patchAluno;
module.exports.putAluno = putAluno;
