const db = require('../configs/pg')

const sql_get =
    `select idprofessor,
            matricula,
            cargo 
      from professor `

const getProfessor = async () => {
    let professor = {}
    await db.query(sql_get)
        .then(ret => professor = { total: ret.rows.length, professor: ret.rows })
        .catch(err => professor = err.stack)
    return professor
}

const sql_insert =
    `insert into professor (matricula, cargo)
                    values ($1, $2)  `
const postProfessor = async (params) => {
    const { matricula, cargo } = params
    await db.query(sql_insert, [matricula, cargo])
}

const sql_delete =
    `    delete from professor
      where idprofessor = $1 `;
const deleteProfessor = async (params) => {
    const { idprofessor } = params
    await db.query(sql_delete, [idprofessor]);
}

const sql_patch =
    `update professor
        set
    `
const patchProfessor = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.idprofessor)
    let countParams = 1
    if (params.matricula) {
        countParams++
        fields += ` matricula = $${countParams} `
        binds.push(params.matricula)
    }
    if (params.cargo) {
        countParams++
        fields += (fields ? ',' : '') + ` cargo = $${countParams} `
        binds.push(params.cargo)
    }
    
    let sql = sql_patch + fields + ' where idprofessor = $1 '
    return await db.query(sql, binds)
} 

module.exports.getProfessor = getProfessor
module.exports.postProfessor = postProfessor
module.exports.deleteProfessor = deleteProfessor
module.exports.patchProfessor = patchProfessor