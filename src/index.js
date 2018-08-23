const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')

const db = require('./db/mysql')

const app = new Koa()

app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

const home = new Router()

home.get('/', async (ctx) => {
    let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/mysql">/page/mysql</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
    ctx.body = html
})

const page = new Router()

page.get('/404', async (ctx) => {
    ctx.body = '404'
})
page.get('/helloworld', async (ctx) => {
    let title = 'hello koa2'
    await ctx.render('index', {
        title
    })
})
page.get('/mysql', async (ctx) => {
    let result
    try {
        result = await db.query(`SELECT * FROM class`)
    } catch(e) {
        ctx.body = e.stack
    }
    ctx.body = result
})

const router = new Router()

router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () => {
    console.log(`server is started on 3001`)
})