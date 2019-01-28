import mongoose from 'mongoose'

// const beautifyUnique = require('mongoose-beautiful-unique-validation');

// вместо MongoError будет выдавать ValidationError (проще ловить и выводить)
// mongoose.plugin(beautifyUnique)
mongoose.set('debug', true)

mongoose.plugin(schema => {
  if (!schema.options.toObject) {
    schema.options.toObject = {}
  }

  if (schema.options.toObject.transform == undefined) {
    schema.options.toObject.transform = (doc, ret) => {
      delete ret.__v
      return ret
    }
  }

})

mongoose.connect('mongodb://localhost/test')

export default mongoose