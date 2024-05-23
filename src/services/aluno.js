const db = require('../configs/pg')

const sql_get =
    `select idaluno,
            matricula,
            dataNascimento 
      from aluno `

const getAluno = async () => {
    let aluno = {}
    await db.query(sql_get)
        .then(ret => aluno = { total: ret.rows.length, alunos: ret.rows })
        .catch(err => aluno = err.stack)
    return aluno
}

const sql_insert =
    `insert into aluno (idaluno, matricula, dataNascimento)
                    values ($1, $2, $3)  `
const postAluno = async (params) => {
    const { idaluno, matricula, dataNascimento } = params
    await db.query(sql_insert, [idaluno, matricula, dataNascimento])
}

const sql_delete =
    `    delete from aluno
      where idaluno = $1 `;
const deleteAluno = async (params) => {
    const { idaluno } = params
    await db.query(sql_delete, [idaluno]);
}

const sql_put =
    `update aluno
        set matricula = $2,
        dataNascimento = $3,
        where idaluno = $1 `
const putAluno = async (params) => {
    const { idaluno, matricula, dataNascimento } = params
    return await db.query(sql_put, [idaluno, matricula, dataNascimento])
}

/*
const sql_patch =
    `update alunos
        set
    `
const patchAlunos = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome) {
        countParams++
        fields += ` nome = $${countParams} `
        binds.push(params.nome)
    }
    if (params.sobrenome) {
        countParams++
        fields += (fields ? ',' : '') + ` sobrenome = $${countParams} `
        binds.push(params.sobrenome)
    }
    if (params.periodo) {
        countParams++
        fields += (fields ? ',' : '') + ` periodo = $${countParams} `
        binds.push(params.periodo)
    }
    if (params.observacao) {
        countParams++
        fields += (fields ? ',' : '') + ` observacao = $${countParams} `
        binds.push(params.observacao)
    }
    let sql = sql_patch + fields + ' where id = $1 '
    return await db.query(sql, binds)
} */

module.exports.getAluno = getAluno
module.exports.postAluno = postAluno
module.exports.deleteAluno = deleteAluno
module.exports.putAluno = putAluno
// module.exports.patchAlunos = patchAlunos