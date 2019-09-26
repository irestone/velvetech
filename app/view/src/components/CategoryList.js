import React, { Component } from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCategories } from '../store/actions/data/categories'

class CategoryListComponent extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props
    return categories.length ? (
      <ul>
        {categories.map((c) => (
          <li key={c._id}>{c.name}</li>
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
}

// todo: optimize selection
export const CategoryList = connect(
  ({ data: { categories } }) => ({ categories }),
  { getCategories }
)(CategoryListComponent)
