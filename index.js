const {Server} = require('http')

const server = new Server((req, res) => {
  res.end('helloWorld')
})

server.listen(process.env.PORT)


