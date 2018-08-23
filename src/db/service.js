const {query} = require('./mysql')
exports.insertData = value => {
    let sql = `INSERT INTO USERS SET name=?, password=?, avator=?, moment=?;`
    return query(sql, value)
}