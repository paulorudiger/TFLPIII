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
    `insert into aluno (matricula, dataNascimento)
                    values ($1, $2)  `
const postAluno = async (params) => {
    const { matricula, dataNascimento } = params
    await db.query(sql_insert, [matricula, dataNascimento])
}

const sql_delete =
    `    delete from aluno
      where idaluno = $1 `;
const deleteAluno = async (params) => {
    const { idaluno } = params
    await db.query(sql_delete, [idaluno]);
}

const sql_patch =
    `update aluno
        set
    `
const patchAluno = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.idaluno)
    let countParams = 1
    if (params.matricula) {
        countParams++
        fields += ` matricula = $${countParams} `
        binds.push(params.matricula)
    }
    if (params.dataNascimento) {
        countParams++
        fields += (fields ? ',' : '') + ` dataNascimento = $${countParams} `
        binds.push(params.dataNascimento)
    }
    
    let sql = sql_patch + fields + ' where idaluno = $1 '
    return await db.query(sql, binds)
} 

module.exports.getAluno = getAluno
module.exports.postAluno = postAluno
module.exports.deleteAluno = deleteAluno
module.exports.patchAluno = patchAluno