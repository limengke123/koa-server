const Router = require('koa-router')

const page = new Router()

page.get('/', Home)

async function Home (ctx, next) {
    let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/api/mysql">/api/mysql</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
}


module.exports = page