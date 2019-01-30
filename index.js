// const {Server} = require('http')
import {Server} from 'http'
const server = new Server((req, res) => {
  res.end('helloWorld')
})

server.listen(process.env.PORT || 8000)


