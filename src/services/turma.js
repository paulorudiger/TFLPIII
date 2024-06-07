const db = require('../configs/pg')

const sql_get =
    `select idprofessor,
            matricula,
            cargo 
      from professor `

const getTurma = async () => {
    let professor = {}
    await db.query(sql_get)
        .then(ret => professor = { total: ret.rows.length, professor: ret.rows })
        .catch(err => professor = err.stack)
    return professor
}


module.exports.getTurma = getTurma