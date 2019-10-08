import React from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import {
  showAddProductForm,
  hideAddProductForm,
} from '../store/actions/views/products'

// components
import { AddProduct } from '../components/forms/AddProduct'
import { ProductList } from '../components/ProductList'

// ui
import { Box, makeStyles, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  creatingForm: {
    marginTop: spacing(3),
  },
  newProductButton: {
    marginTop: spacing(2),
  },
}))

// =====================================
//  BASE
// =====================================

const ProductsBase = ({
  isAddProductFormHidden,
  showAddProductForm,
  hideAddProductForm,
}) => {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant='h3'>Products</Typography>
      <div className={classes.creatingForm}>
        {isAddProductFormHidden ? (
          <Button
            color='primary'
            onClick={showAddProductForm}
            className={classes.newProductButton}
          >
            New product
          </Button>
        ) : (
          <AddProduct cancel={hideAddProductForm} />
        )}
      </div>
      <Box mt={2}>
        <ProductList />
      </Box>
    </Box>
  )
}

ProductsBase.propTypes = {
  isAddProductFormHidden: PropTypes.bool,
  showAddProductForm: PropTypes.func,
  hideAddProductForm: PropTypes.func,
}

// =====================================
//  WRAPPINGS
// =====================================

export const Products = connect(
  ({ views: { products } }) => ({
    isAddProductFormHidden: products.isAddProductFormHidden,
  }),
  { showAddProductForm, hideAddProductForm }
)(ProductsBase)
