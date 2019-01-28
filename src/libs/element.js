import mongoose from 'mongoose'

// uniqueValidator validation is not atomic! unsafe!
const elementSchema = new mongoose.Schema({
  name: {
    type: String,
  },
}, {
  timestamps: true,
})

elementSchema.statics.publicFields = ['name']

export default mongoose.model('Element', elementSchema)
