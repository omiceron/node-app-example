// class Route {
//   constructor(...args) {
//     args.forEach(arg => this[arg.name] = arg)
//   }
// }
//
// const frontPage = new Route(get)

// export default frontPage

const get = async (ctx) => {
  ctx.body = 'front page'
}

export default {get}


