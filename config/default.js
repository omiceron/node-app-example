module.exports = {
  root: process.cwd(),
  port: process.env.PORT || 8000,
  mongo: process.env.MONGODB_URI || 'mongodb://localhost:27017/new'
}
