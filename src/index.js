import Koa from 'koa'
import Router from 'koa-router'
import {readdirSync} from 'fs'
import {join} from 'path'
import {MIDDLEWARES_PATH} from './constants'

const app = new Koa()
const router = new Router()

const middlewaresAbsolutePath = join(__dirname, MIDDLEWARES_PATH)

readdirSync(middlewaresAbsolutePath)
  .sort()
  .forEach(name => {
    const middlewarePath = join(middlewaresAbsolutePath, name)
    app.use(require(middlewarePath))
  })


router.get('/:data', async (ctx) => {
  ctx.body = ctx.params.data
})

router.get('/', async (ctx) => {
  ctx.body = 'Hello World!'
})

app.use(router.routes())

app.listen(8000)