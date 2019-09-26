import React from 'react'

// sub-components
import { AddCategory } from '../components/forms/AddCategory'

// ui
import { Paper } from '@material-ui/core'

// component
export const Categories = () => (
  <Paper className='Categories'>
    <AddCategory />
  </Paper>
)
