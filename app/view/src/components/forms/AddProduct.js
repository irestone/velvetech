import React, { useState } from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { addProduct } from '../../store/actions/data/products'

// utils
import { validateProduct as validate } from '../../utils/validators'

// components
import { TextField, DateField, SelectField, NumberField } from './muiFields'

// ui
import { makeStyles, Button } from '@material-ui/core'

// styles
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
  const [errors, setErrors] = useState({})

  const onSubmit = (values) => {
    const errs = validate(values)
    setErrors(errs || {})
    if (errs) return
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
        error={!!errors.name}
        helperText={!!errors.name && errors.name.join('. ')}
        component={TextField}
        name='name'
        label='Name'
        autoFocus
        className={classes.field}
      />
      <Field
        error={!!errors.price}
        helperText={!!errors.price && errors.price.join('. ')}
        component={NumberField}
        name='price'
        label='Price (&#8381;)'
        className={classes.field}
      />
      <Field
        error={!!errors.shelfLife}
        helperText={!!errors.shelfLife && errors.shelfLife.join('. ')}
        component={DateField}
        name='shelfLife'
        label='Shelf Life'
        className={classes.field}
      />
      <Field
        error={!!errors.category}
        helperText={!!errors.category && errors.category.join('. ')}
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
