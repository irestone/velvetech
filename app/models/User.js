import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: String,
})

export const User = model('User', schema)
