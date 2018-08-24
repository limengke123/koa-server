const Router = require('koa-router')

const {insertData} = require('../db/service')

const api = new Router()

api.get('/', test)

api.get('/mysql', insertUser)

api.get('/list', getList)

async function test (ctx, next) {
    ctx.body = 22
}

async function insertUser (ctx, next) {
    // name=?, password=?, avator=?, moment=?
    await insertData({
        name: 'limengke',
        password: 'password',
        avator: 'this avator',
        moment: new Date()
    })
    ctx.body = 111
}

async function getList (ctx, next) {
    const data = await findUserData('limengke')
    ctx.boyd = data
}

module.exports = api
