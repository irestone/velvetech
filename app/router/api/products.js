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
    const { name, price, shelfLife, categoryId } = req.body

    const newProduct = new Product({
      name,
      price,
      shelfLife,
      category: categoryId,
    })

    const savedProduct = await newProduct.save()

    res.json({ data: savedProduct })
  } catch (error) {
    res.json({ error })
  }
})
