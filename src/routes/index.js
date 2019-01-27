import Router from 'koa-router'
import frontPage from './frontPage'
import dataPage from './dataPage'

const router = new Router()

router.get('/:data', dataPage.get)
router.get('/', frontPage.get)

export default router.routes()