import { Router } from 'express'

import { Product } from '../../models/Product'

export const productsRouter = new Router()

productsRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json({ data: products })
  } catch (error) {
    res.json({ error })
  }
})

productsRouter.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body)
    const savedProduct = await newProduct.save()
    res.json({ data: savedProduct })
  } catch (error) {
    res.json({ error })
  }
})
