const db = require('../configs/pg')

const sql_get =
    `select idprofessor,
            matricula,
            cargo 
      from professor `

const getUsuario = async () => {
    let professor = {}
    await db.query(sql_get)
        .then(ret => professor = { total: ret.rows.length, professor: ret.rows })
        .catch(err => professor = err.stack)
    return professor
}


module.exports.getUsuario = getUsuario