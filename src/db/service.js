const {query} = require('./mysql')

// 注册
exports.insertData = value => {
    let sql = `INSERT INTO USERS SET name=?, password=?, avator=?, moment=?;`
    return query(sql, value)
}

// 删除
exports.deleteUserData = name => {
    let sql = `DELETE FROM users WHERE name="${name}";`
    return query(sql)
}

// 查找
exports.findUserData = name => {
    let sql = `SELECT * FROM users WHERE name="${name}";`
    return query(sql)
}

// 存文章
exports.insertPost = value => {
    let sql = `INSERT INTO posts SET name=?, title=?, content=?, md=?, uid=?, moment=?, avator=?;`
}

// 增加文章评论
exports.addPostCommentCount = value => {
    let sql = `UPDATE posts SET comments = comments + 1 WHERE id=?;`
    return query(sql, value)
}