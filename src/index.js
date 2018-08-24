const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
const chalk = require('chalk')

const db = require('./db/mysql')
const {init} = require('./db/init')
const initRouter = require('./router')

init()

const app = new Koa()

app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

initRouter(app)

app.listen(3001, () => {
    console.log(`server is started on 3001`)
})

process.on('uncaughtException', err => {
    console.log(chalk.red(err))
})

process.on('unhandledRejection', err => {
    console.log(chalk.red(err))
})