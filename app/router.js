import express from 'express'
import path from 'path'

import { apiRouter } from './router/api'

export const router = (req, _, next) => {
  const { app } = req

  app.use(express.static(path.join(__dirname, 'view', 'build')))
  app.use('/api', apiRouter)
  app.use('*', (_, res) =>
    res.sendFile(path.join(__dirname, 'view', 'build', 'index.html'))
  )

  next()
}
