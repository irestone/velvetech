import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addCategory } from '../../store/actions/data/categories'

// component
class AddCategoryComponent extends Component {
  onSubmit(data) {
    const { addCategory, reset } = this.props
    addCategory(data)
    reset()
  }

  render() {
    return (
      <div className='add-category'>
        <button>New Category</button>
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Field name='name' component='input' type='text' placeholder='Name' />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

AddCategoryComponent.propTypes = {
  addCategory: PropTypes.func,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
}

// form fields sync
const AddCategoryReduxFormWrapper = reduxForm({ form: 'AddCategory' })(
  AddCategoryComponent
)

// store connection
export const AddCategory = connect(
  () => ({}),
  { addCategory }
)(AddCategoryReduxFormWrapper)
