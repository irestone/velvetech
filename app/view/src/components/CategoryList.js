import React, { Component } from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCategories, deleteCategory } from '../store/actions/data/categories'

class CategoryListComponent extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories, deleteCategory } = this.props
    return categories.length ? (
      <ul>
        {categories.map(({ _id: id, name }) => (
          <li key={id}>
            <span>{name}</span>
            <button onClick={deleteCategory.bind(this, id)}>delete</button>
          </li>
        ))}
      </ul>
    ) : (
      <p>There are no categories.</p>
    )
  }
}

CategoryListComponent.propTypes = {
  categories: PropTypes.array,
  getCategories: PropTypes.func,
  deleteCategory: PropTypes.func,
}

// todo: optimize selection
export const CategoryList = connect(
  ({ data: { categories } }) => ({ categories }),
  { getCategories, deleteCategory }
)(CategoryListComponent)
