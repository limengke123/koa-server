const Router = require('koa-router')
const page = require('./page')
const api = require('./api')

const router = new Router()

router.use('/', page.routes(), page.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

const initRouter = app => {
    app.use(router.routes()).use(router.allowedMethods())
}

module.exports = initRouter