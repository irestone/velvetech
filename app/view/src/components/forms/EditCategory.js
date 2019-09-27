import React, { Component } from 'react'

import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types'

import { updateCategory } from '../../store/actions/data/categories'

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
          component='input'
          type='text'
          placeholder='Name'
          autoFocus
        />
        <button>Save</button>
      </form>
    )
  }
}

EditCategoryComponent.propTypes = {
  category: PropTypes.object,
  updateCategory: PropTypes.func,
  cancelEditing: PropTypes.func,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  initialize: PropTypes.func,
}

// form fields sync
const EditCategoryReduxFormWrapper = reduxForm()(EditCategoryComponent)

// store connection
// todo: optimize selection
export const EditCategory = connect(
  () => ({}),
  {
    updateCategory,
  }
)(EditCategoryReduxFormWrapper)
