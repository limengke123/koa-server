const query = require('./mysql')

let users = `
    CREATE TABLE IF NOT EXISTS user(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL COMMENT '用户名',
        password VARCHAR(100) NOT NULL COMMENT '密码',
        avator VARCHAR(100) NOT NULL COMMENT '头像',
        moment VARCHAR(100) NOT NULL COMMENT '注册时间',
        PRIMARY KEY(id)
    );
`

let posts = `
    CREATE TABLE IF NOT EXISTS posts(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL COMMENT '文章作者',
        title TEXT(0) NOT NULL COMMENT '评论题目',
        content TEXT(0) NOT NULL COMMENT '评论内容',
        md TEXT(0) NOT NULL COMMENT 'markdown',
        uid VARCHAR(40) NOT NULL COMMENT '用户ID',
        moment VARCHAR(100) NOT NULL COMMENT '发布时间',
        comments VARCHAR(200) NOT NULL DEFAULT '0' COMMENT '文章评论数',
        pv VARCHAR(40) NOT NULL DEFAULT '0' COMMENT '浏览量',
        avator VARCHAR(100) NOT NULL COMMENT '用户头像',
        PRIMARY KEY(id)
    );
`

let comment = `
    CREATE TABLE IF NOT EXITS comment(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL COMMENT '用户名称',
        content TEXT(0) NOT NULL COMMENT '评论内容',
        moment VARCHAR(40) NOT NULL COMMENT '评论时间',
        postid VARCHAR(40) NOT NULL COMMENT '文章ID',
        avator VARCHAR(100) NOT NULL COMMENT '用户头像',
        PRIMARY KEY(id)
    );
`

let createTable = sql => query(sql, [])

createTable(users)
createTable(posts)
createTable(comment)

