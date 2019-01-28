import Koa from 'koa'
import routes from './routes'
import middlewares from './middlewares'
import mongoose from './libs/mongoose'
import Element from './libs/element'

import Router from 'koa-router'

const newRoutes = new Router({
  prefix: '/f',
})

newRoutes
  .param('some', async (data, ctx, next) => {
    if (!mongoose.Types.ObjectId.isValid(data)) return
    ctx.some = 'new data: ' + data
    ctx.element = Element.findById(data)
    await next()
  })
  .get('/:some', async (ctx) => {
    ctx.body = ctx.element.toObject()
  })

const app = new Koa()

middlewares.forEach(m => app.use(m))

app.use(routes)
app.use(newRoutes.routes())

export default app