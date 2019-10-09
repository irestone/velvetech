import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { updateCategory } from '../../store/actions/data/categories'

// components
import { TextField } from './muiFields'

// ui
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  field: {
    width: spacing(28),
  },
}))

// =====================================
//  BASE
// =====================================

const EditCategoryBase = ({
  category,
  cancel,
  updateCategory,
  initialize,
  handleSubmit,
  reset,
}) => {
  const classes = useStyles()

  useEffect(() => {
    initialize({ name: category.name })
  }, [initialize, category.name])

  const onSubmit = (id, values) => {
    updateCategory(id, values)
    cancel()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit.bind(null, category._id))}>
      <Field
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
  cancel: PropTypes.func,
  updateCategory: PropTypes.func,
  initialize: PropTypes.func,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
}

// =====================================
//  WRAPPINGS
// =====================================

const EditCategorySyncedFields = reduxForm()(EditCategoryBase)

export const EditCategory = connect(
  () => ({}),
  { updateCategory }
)(EditCategorySyncedFields)
