import { Router } from 'express'

import { usersRouter } from './api/users'
import { categoriesRouter } from './api/categories'
import { productsRouter } from './api/products'

export const apiRouter = new Router()

apiRouter.use('/users', usersRouter)
apiRouter.use('/products', productsRouter)
apiRouter.use('/categories', categoriesRouter)
