import {Server} from 'http'

const server = new Server((req, res) => {
  res.end('Hello world!')
})

server.listen(8000)

