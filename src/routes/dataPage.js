const get = async (ctx) => {
  ctx.body = ctx.params.data
}

export default {get}