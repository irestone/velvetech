import React, { Component } from 'react'

// state
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'
import { updateCategory } from '../../store/actions/data/categories'

// ui
import { withStyles } from '@material-ui/core'
import { TextField } from './muiFields'

// component
class EditCategoryComponent extends Component {
  componentDidMount() {
    const {
      initialize,
      category: { name },
    } = this.props

    initialize({ name })
  }

  // todo: validation
  onSubmit(id, values) {
    const { updateCategory, cancelEditing } = this.props
    updateCategory(id, values)
    cancelEditing()
  }

  render() {
    const {
      classes,
      category: { _id: id },
      handleSubmit,
    } = this.props

    return (
      <form
        className='edit-category'
        onSubmit={handleSubmit(this.onSubmit.bind(this, id))}
      >
        <Field
          name='name'
          component={TextField}
          type='text'
          placeholder='Name'
          autoFocus
          className={classes.field}
        />
      </form>
    )
  }
}

EditCategoryComponent.propTypes = {
  classes: PropTypes.object,
  category: PropTypes.object,
  updateCategory: PropTypes.func,
  cancelEditing: PropTypes.func,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  initialize: PropTypes.func,
}

// styling
const styles = ({ spacing }) => ({
  field: {
    width: spacing(30),
  },
})

const Styled = withStyles(styles)(EditCategoryComponent)

// form fields sync
const SyncedFields = reduxForm()(Styled)

// store connection
// todo: optimize selection
export const EditCategory = connect(
  () => ({}),
  {
    updateCategory,
  }
)(SyncedFields)
