import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: String,
})

export const Category = model('Category', schema)
