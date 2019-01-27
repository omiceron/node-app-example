import Koa from 'koa'
import routes from './routes'
import middlewares from './middlewares'

const app = new Koa()

app.use(...middlewares, routes)

export default app