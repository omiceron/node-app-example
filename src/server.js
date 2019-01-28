import Koa from 'koa'
import routes from './routes'
import middlewares from './middlewares'

const app = new Koa()

middlewares.forEach(m => app.use(m))

app.use(routes)

export default app