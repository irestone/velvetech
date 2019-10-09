import React from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { addCategory } from '../../store/actions/data/categories'

// components
import { TextField } from './muiFields'

// ui
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  button: {
    marginLeft: spacing(2),
    marginTop: spacing(2),
  },
  field: {
    width: spacing(40),
  },
}))

// =====================================
//  BASE
// =====================================

const AddCategoryBase = ({
  cancel,
  addCategory,
  handleSubmit,
  pristine,
  reset,
  destroy,
}) => {
  const classes = useStyles()

  const onSubmit = (values) => {
    addCategory(values)
    reset()
  }

  const onCancel = () => {
    destroy()
    cancel()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name='name'
        component={TextField}
        type='text'
        label='Name'
        autoFocus
        className={classes.field}
      />
      <Button
        type='submit'
        color='primary'
        className={classes.button}
        disabled={pristine}
      >
        Create
      </Button>
      <Button className={classes.button} onClick={onCancel}>
        Cancel
      </Button>
    </form>
  )
}

AddCategoryBase.propTypes = {
  addCategory: PropTypes.func,
  cancel: PropTypes.func,
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  destroy: PropTypes.func,
  classes: PropTypes.object,
}

// =====================================
//  WRAPPINGS
// =====================================

const AddCategorySyncedFields = reduxForm({ form: 'AddCategory' })(
  AddCategoryBase
)

export const AddCategory = connect(
  () => ({}),
  { addCategory }
)(AddCategorySyncedFields)
