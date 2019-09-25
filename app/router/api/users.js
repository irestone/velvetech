import { Router } from 'express'

import { User } from '../../models/User'

export const usersRouter = new Router()

usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json({ data: users })
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
})

usersRouter.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    res.json({ data: savedUser })
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
})

usersRouter.get('/me', async (req, res) => {
  try {
    const user = { _id: 'asdf', name: 'John' }
    res.json({ data: user })
  } catch (error) {
    console.error(error)
    res.json({ error })
  }
})
