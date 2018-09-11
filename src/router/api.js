const Router = require('koa-router')

const {insertData} = require('../db/service')

const api = new Router()

api.get('/', test)

api.get('/mysql', insertPage)

api.get('/list', getList)

api.post('/addUser', addUser)

async function addUser(ctx, next) {
    let data
    try {
        data = insertData(ctx.request.body)
        ctx.body = {
            success: true,
            data
        }
    } catch (e) {
        console.log(e.stack)
        ctx.body = {
            success: false,
            data
        }
    }
}

async function test (ctx, next) {
    ctx.body = 22
}

async function insertPage(ctx, next) {
    await ctx.render('form', {
        title: '添加用戶'
    })
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
