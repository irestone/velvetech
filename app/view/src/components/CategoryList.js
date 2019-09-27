import React, { Component } from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCategories, deleteCategory } from '../store/actions/data/categories'
import {
  editCategory,
  cancelCategoryEditing,
} from '../store/actions/views/categories'
import { EditCategory } from './forms/EditCategory'

class CategoryListComponent extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const {
      categories,
      editing,
      editCategory,
      cancelCategoryEditing,
      deleteCategory,
    } = this.props
    return categories.length ? (
      <ul>
        {categories.map((category) => {
          const { _id: id, name } = category
          const isEditing = editing.includes(id)
          return (
            <li key={id}>
              <span>{name}</span>
              {isEditing ? (
                <button onClick={cancelCategoryEditing.bind(this, id)}>
                  cancel
                </button>
              ) : (
                <button onClick={editCategory.bind(this, id)}>edit</button>
              )}
              <button onClick={deleteCategory.bind(this, id)}>delete</button>
              {isEditing && (
                <EditCategory
                  form={id}
                  category={category}
                  cancelEditing={cancelCategoryEditing.bind(this, id)}
                />
              )}
            </li>
          )
        })}
      </ul>
    ) : (
      <p>There are no categories.</p>
    )
  }
}

CategoryListComponent.propTypes = {
  categories: PropTypes.array,
  editing: PropTypes.array,
  getCategories: PropTypes.func,
  deleteCategory: PropTypes.func,
  editCategory: PropTypes.func,
  cancelCategoryEditing: PropTypes.func,
}

// todo: optimize selection
export const CategoryList = connect(
  ({
    data: { categories },
    views: {
      categories: { editing },
    },
  }) => ({ categories, editing }),
  { getCategories, deleteCategory, editCategory, cancelCategoryEditing }
)(CategoryListComponent)
