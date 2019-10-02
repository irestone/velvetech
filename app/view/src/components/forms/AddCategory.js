import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addCategory } from '../../store/actions/data/categories'

import { Button, withStyles } from '@material-ui/core'
import { TextField } from './muiFields'

// component
class AddCategoryComponent extends Component {
  onSubmit(values) {
    const { addCategory, reset } = this.props
    addCategory(values)
    reset()
  }

  onCancel(values) {
    const { reset, cancel } = this.props
    reset()
    cancel()
  }

  render() {
    const { classes, handleSubmit, pristine } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <Button
          className={classes.button}
          onClick={handleSubmit(this.onCancel.bind(this))}
        >
          Cancel
        </Button>
      </form>
    )
  }
}

AddCategoryComponent.propTypes = {
  addCategory: PropTypes.func,
  cancel: PropTypes.func,
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  classes: PropTypes.object,
}

// styling
const styles = ({ spacing }) => ({
  button: {
    marginLeft: spacing(2),
    marginTop: spacing(2),
  },
  field: {
    width: spacing(40),
  },
})

const Styled = withStyles(styles)(AddCategoryComponent)

// form fields sync
const SyncedFields = reduxForm({ form: 'AddCategory' })(Styled)

// store connection
// todo: optimize selection
export const AddCategory = connect(
  () => ({}),
  { addCategory }
)(SyncedFields)
