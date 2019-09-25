import { Router } from 'express'

import { Category } from '../../models/Category'

export const categoriesRouter = new Router()

categoriesRouter.get('/', async (req, res) => {
  try {
    const categories = await Category.find()
    res.json({ data: categories })
  } catch (error) {
    res.json({ error })
  }
})

categoriesRouter.post('/', async (req, res) => {
  try {
    const newCategory = new Category(req.body)
    const savedCategory = await newCategory.save()
    res.json({ data: savedCategory })
  } catch (error) {
    res.json({ error })
  }
})
