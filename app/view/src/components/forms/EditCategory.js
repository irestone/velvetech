import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { updateCategory } from '../../store/actions/data/categories'
import { cancelCategoryEditing } from '../../store/actions/views/categories'

// utils
import { validateCategory as validate } from '../../utils/validators'

// components
import { TextField } from './muiFields'

// ui
import { makeStyles, IconButton } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import SaveIcon from '@material-ui/icons/Save'

// styles
const useStyles = makeStyles(({ spacing }) => ({
  field: {
    width: spacing(28),
    marginTop: '.4em',
  },
  actions: {
    marginRight: spacing(1),
  },
}))

// =====================================
//  BASE
// =====================================

const EditCategoryBase = ({
  category,
  updateCategory,
  cancelCategoryEditing,
  initialize,
  handleSubmit,
  reset,
  destroy,
}) => {
  const classes = useStyles()
  const [errors, setErrors] = useState({})

  useEffect(() => {
    initialize({ name: category.name })
  }, [initialize, category.name])

  const onSubmit = (values) => {
    const errs = validate(values)
    setErrors(errs || {})
    if (errs) return
    updateCategory(category._id, values)
    cancelCategoryEditing(category._id)
  }

  const onCancel = () => {
    destroy()
    cancelCategoryEditing(category._id)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span className={classes.actions}>
        <IconButton type='submit' title='Save'>
          <SaveIcon fontSize='small' />
        </IconButton>
        <IconButton title='Cancel' color='secondary' onClick={onCancel}>
          <CancelIcon fontSize='small' />
        </IconButton>
      </span>
      <Field
        error={!!errors.name}
        helperText={!!errors.name && errors.name.join('. ')}
        component={TextField}
        name='name'
        placeholder='Name'
        autoFocus
        className={classes.field}
      />
    </form>
  )
}

EditCategoryBase.propTypes = {
  category: PropTypes.object,
  updateCategory: PropTypes.func,
  cancelCategoryEditing: PropTypes.func,
  initialize: PropTypes.func,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  destroy: PropTypes.func,
}

// =====================================
//  WRAPPINGS
// =====================================

const EditCategorySyncedFields = reduxForm()(EditCategoryBase)

export const EditCategory = connect(
  () => ({}),
  { updateCategory, cancelCategoryEditing }
)(EditCategorySyncedFields)
