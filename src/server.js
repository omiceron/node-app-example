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
    if (!mongoose.Types.ObjectId.isValid(data)) {
      ctx.throw(404, 'data not valid')
    }

    ctx.some = 'new data: ' + data

    ctx.element = await Element.findById(data)

    if (!ctx.element) {
      ctx.throw(404, 'no such element')
    }

    await next()
  })
  .post('/create', async (ctx) => {
    const element = await Element.create(ctx.request.body)
    ctx.body = element.toObject()
  })
  .get('/:some', async (ctx) => {
    ctx.body = ctx.element.toObject().name
  })

const app = new Koa()

middlewares.forEach(m => app.use(m))

app.use(routes)
app.use(newRoutes.routes())

export default app