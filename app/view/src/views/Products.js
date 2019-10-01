import React from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  showCreateProductForm,
  hideCreateProductForm,
} from '../store/actions/views/products'

// sub-components
import { AddProduct } from '../components/forms/AddProduct'
import { ProductList } from '../components/ProductList'

// ui
import { Box, makeStyles, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginTop: spacing(3),
  },
  creatingForm: {
    marginTop: spacing(3),
  },
  newProductButton: {
    marginTop: spacing(2),
  },
}))

// component
const ProductsComponent = ({
  isAddProductFormHidden,
  showCreateProductForm,
  hideCreateProductForm,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Typography variant='h3'>Products</Typography>
      <div className={classes.creatingForm}>
        {isAddProductFormHidden ? (
          <Button
            color='primary'
            onClick={showCreateProductForm}
            className={classes.newProductButton}
          >
            New product
          </Button>
        ) : (
          <AddProduct cancel={hideCreateProductForm} />
        )}
      </div>
      <ProductList />
    </Box>
  )
}

ProductsComponent.propTypes = {
  isAddProductFormHidden: PropTypes.bool,
  showCreateProductForm: PropTypes.func,
  hideCreateProductForm: PropTypes.func,
}

// store connection
// todo: optimize selection
export const Products = connect(
  ({
    views: {
      products: { isAddProductFormHidden },
    },
  }) => ({
    isAddProductFormHidden,
  }),
  { showCreateProductForm, hideCreateProductForm }
)(ProductsComponent)
