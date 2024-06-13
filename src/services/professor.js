const db = require("../configs/pg");
const usuarioService = require("../services/usuario");

const sql_get = `
    SELECT idprofessor, idusuario, matricula, cargo 
    FROM professor`;

const getProfessor = async () => {
  let professores = {};
  await db
    .query(sql_get)
    .then((ret) => (professores = { total: ret.rows.length, professores: ret.rows }))
    .catch((err) => {
      throw { status: 500, message: err.stack };
    });
  return professores;
};

const sql_insert = `
    INSERT INTO professor (idusuario, matricula, cargo) 
    VALUES ($1, $2, $3) RETURNING *`;

const postProfessor = async (params) => {
  const { idusuario, matricula, cargo } = params;
  try {
    const usuario = await usuarioService.getUsuarioByIdusuario(idusuario);
    if (!usuario) {
      throw new Error("Usuario não encontrado");
    }
    const result = await db.query(sql_insert, [idusuario, matricula, cargo]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Professor criado com sucesso!", result: result.rows[0] };
  } catch (err) {
    if (err.message === "Usuario não encontrado") {
      throw {
        status: 404,
        message: `Usuário com o ID ${idusuario} não encontrado`,
      };
    }
    if (err.constraint === "professor_matricula_key") {
      throw {
        status: 409,
        message: `Matrícula ("${matricula}") já existe.`,
      };
    }
    throw {
      status: 500,
      message: "Erro ao tentar criar o professor. [" + err.message + "]",
    };
  }
};

const sql_delete = `
    DELETE FROM professor
    WHERE idprofessor = $1`;

const deleteProfessor = async (params) => {
  const { idprofessor } = params;
  try {
    const result = await db.query(sql_delete, [idprofessor]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Professor deletado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Professor com o id ${params.idprofessor} não encontrado`,
      };
    }
    throw { status: 500, message: "Erro ao tentar deletar o professor" };
  }
};

const sql_patch = `
    UPDATE professor
    SET`;

const patchProfessor = async (params) => {
  let fields = "";
  let binds = [params.idprofessor];
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
  if (params.cargo) {
    countParams++;
    fields += (fields ? "," : "") + ` cargo = $${countParams} `;
    binds.push(params.cargo);
  }

  let sql = sql_patch + fields + " WHERE idprofessor = $1";
  try {
    const result = await db.query(sql, binds);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Professor atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Professor com o id ${params.idprofessor} não encontrado`,
      };
    }
    if (err.constraint === "professor_matricula_key") {
      throw {
        status: 409,
        message: `Matrícula ("${params.matricula}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o professor" };
  }
};

const sql_put = `
    UPDATE professor
    SET idusuario = $2,
        matricula = $3,
        cargo = $4
    WHERE idprofessor = $1`;

const putProfessor = async (params) => {
  const { idprofessor, idusuario, matricula, cargo } = params;
  try {
    const result = await db.query(sql_put, [idprofessor, idusuario, matricula, cargo]);
    if (result.rowCount === 0) {
      throw new Error("NotFound");
    }
    return { mensagem: "Professor atualizado com sucesso!" };
  } catch (err) {
    if (err.message === "NotFound") {
      throw {
        status: 404,
        message: `Professor com o id ${params.idprofessor} não encontrado`,
      };
    }
    if (err.constraint === "professor_matricula_key") {
      throw {
        status: 409,
        message: `Matrícula ("${matricula}") já existe.`,
      };
    }
    throw { status: 500, message: "Erro ao tentar atualizar o professor" };
  }
};

module.exports.getProfessor = getProfessor;
module.exports.postProfessor = postProfessor;
module.exports.deleteProfessor = deleteProfessor;
module.exports.patchProfessor = patchProfessor;
module.exports.putProfessor = putProfessor;
