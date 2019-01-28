// const session = require('koa-session')

// const mongooseStore = require('koa-session-mongoose')
// const mongoose = require('../libs/mongoose')

// export default session({
//   key: 'myKey',
//   signed: false, // by default true (not needed here)
//   // touch session.updatedAt in DB & reset cookie on every visit to prolong the session
//   // koa-session-mongoose resaves the session as a whole, not just a single field
//   rolling: true,
//
//   store: mongooseStore.create({
//     name: 'Session',
//     expires: 3600 * 4,
//     // connection: mongoose
//   }),
// })

import session from 'koa-generic-session'
import convert from 'koa-convert'

export default convert(session())