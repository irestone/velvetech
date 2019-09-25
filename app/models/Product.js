import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: String,
  price: Number,
  shelfLife: Date,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
})

export const Product = model('Product', schema)
