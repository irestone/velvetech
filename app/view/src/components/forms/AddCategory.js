import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addCategory } from '../../store/actions/data/categories'
import {
  showCreateCategoryForm,
  hideCreateCategoryForm,
} from '../../store/actions/views/categories'

// component
class AddCategoryComponent extends Component {
  onSubmit(data) {
    const { addCategory, reset } = this.props
    addCategory(data)
    reset()
  }

  render() {
    const {
      isAddCategoryFormHidden,
      showCreateCategoryForm,
      hideCreateCategoryForm,
    } = this.props
    return (
      <div className='add-category'>
        <button
          onClick={
            isAddCategoryFormHidden
              ? showCreateCategoryForm
              : hideCreateCategoryForm
          }
        >
          New Category
        </button>
        {!isAddCategoryFormHidden && (
          <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name='name'
              component='input'
              type='text'
              placeholder='Name'
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    )
  }
}

AddCategoryComponent.propTypes = {
  isAddCategoryFormHidden: PropTypes.bool,
  showCreateCategoryForm: PropTypes.func,
  hideCreateCategoryForm: PropTypes.func,
  addCategory: PropTypes.func,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
}

// form fields sync
const AddCategoryReduxFormWrapper = reduxForm({ form: 'AddCategory' })(
  AddCategoryComponent
)

// store connection
// todo: optimize selection
export const AddCategory = connect(
  ({
    views: {
      categories: { isAddCategoryFormHidden },
    },
  }) => ({ isAddCategoryFormHidden }),
  { addCategory, showCreateCategoryForm, hideCreateCategoryForm }
)(AddCategoryReduxFormWrapper)
