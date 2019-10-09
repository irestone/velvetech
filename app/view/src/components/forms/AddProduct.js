import React from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { addProduct } from '../../store/actions/data/products'

// components
import { TextField, DateField, SelectField, NumberField } from './muiFields'

// ui
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  field: {
    width: spacing(20),
    marginRight: spacing(2),
  },
  button: {
    marginTop: spacing(2),
  },
}))

// =====================================
//  BASE
// =====================================

const AddProductBase = ({
  cancel,
  categories = [],
  addProduct,
  handleSubmit,
  pristine,
  reset,
  destroy,
}) => {
  const classes = useStyles()

  const onSubmit = (values) => {
    addProduct(values)
    reset()
  }

  const onCancel = () => {
    destroy()
    cancel()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        component={TextField}
        name='name'
        label='Name'
        autoFocus
        className={classes.field}
      />
      <Field
        component={NumberField}
        name='price'
        label='Price (&#8381;)'
        className={classes.field}
      />
      <Field
        component={DateField}
        name='shelfLife'
        label='Shelf Life'
        className={classes.field}
      />
      <Field
        component={SelectField}
        name='category'
        label='Category'
        options={categories}
        className={classes.field}
      />
      <Button
        type='submit'
        color='primary'
        disabled={pristine}
        className={classes.button}
      >
        Add
      </Button>
      <Button className={classes.button} onClick={onCancel}>
        Cancel
      </Button>
    </form>
  )
}

AddProductBase.propTypes = {
  cancel: PropTypes.func,
  categories: PropTypes.array,
  addProduct: PropTypes.func,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  destroy: PropTypes.func,
}

// =====================================
//  WRAPPINGS
// =====================================

const AddProductSyncedFields = reduxForm({ form: 'AddProduct' })(AddProductBase)

export const AddProduct = connect(
  ({ data: { categories } }) => ({
    categories,
    initialValues: { price: 0, shelfLife: new Date() },
  }),
  { addProduct }
)(AddProductSyncedFields)
