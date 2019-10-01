import React, { Component } from 'react'

// state
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addProduct } from '../../store/actions/data/products'

import { Button, withStyles } from '@material-ui/core'
import { TextField, DateField, SelectField, NumberField } from './muiFields'

class AddProductComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDate: new Date(),
      selectedCategory: '',
    }
  }

  onDateChange(date) {
    this.setState({ selectedDate: date })
  }

  onCategoryChange(e) {
    this.setState({ selectedCategory: e.target.value })
  }

  onSubmit(values) {
    const { addProduct, reset } = this.props
    addProduct(values)
    reset()
  }

  onCancel(values) {
    const { reset, cancel } = this.props
    reset()
    cancel()
  }

  render() {
    const { classes, handleSubmit, pristine, categories = [] } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
          className={`${classes.field} ${classes.ml}`}
        />
        <Field
          component={DateField}
          name='shelfLife'
          label='Shelf Life'
          className={`${classes.field} ${classes.ml}`}
        />
        <Field
          component={SelectField}
          name='category'
          label='Category'
          options={categories}
          className={`${classes.field} ${classes.ml}`}
        />
        <Button
          type='submit'
          color='primary'
          disabled={pristine}
          className={`${classes.button} ${classes.ml}`}
        >
          Add
        </Button>
        <Button
          className={`${classes.button} ${classes.ml}`}
          onClick={handleSubmit(this.onCancel.bind(this))}
        >
          Cancel
        </Button>
      </form>
    )
  }
}

AddProductComponent.propTypes = {
  addProduct: PropTypes.func,
  cancel: PropTypes.func,
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  classes: PropTypes.object,
  categories: PropTypes.array,
}

// styling
const styles = ({ spacing }) => ({
  field: {
    width: spacing(18),
  },
  button: {
    marginTop: spacing(2),
  },
  ml: {
    marginLeft: spacing(2),
  },
})

const Styled = withStyles(styles)(AddProductComponent)

// form fields sync
const SyncedFields = reduxForm({ form: 'AddProduct' })(Styled)

// store connection
// todo: optimize selection
export const AddProduct = connect(
  ({ data: { categories } }) => ({
    categories,
    initialValues: {
      price: 0,
      shelfLife: new Date(),
      category: 'uncategorized',
    },
  }),
  { addProduct }
)(SyncedFields)
