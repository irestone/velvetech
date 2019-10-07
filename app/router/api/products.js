import { Router } from 'express'

import { Product } from '../../models/Product'

export const productsRouter = new Router()

productsRouter.post('/', async (req, res) => {
  try {
    const newProduct = new Product(req.body)
    const savedProduct = await newProduct.save()
    const populatedProduct = await savedProduct
      .populate('category')
      .execPopulate()
    res.json({ data: populatedProduct })
  } catch (error) {
    res.json({ error })
  }
})

productsRouter.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('category')
    res.json({ data: products })
  } catch (error) {
    res.json({ error })
  }
})

productsRouter.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    const populatedProduct = await updatedProduct
      .populate('category')
      .execPopulate()
    res.json({ data: populatedProduct })
  } catch (error) {
    res.json({ error })
  }
})

// delete many
productsRouter.delete('/', async (req, res) => {
  try {
    console.log('ids: ', req.body.ids)
    await Product.deleteMany({ _id: { $in: req.body.ids } })
    res.json({ data: true })
  } catch (error) {
    res.json({ error })
  }
})
