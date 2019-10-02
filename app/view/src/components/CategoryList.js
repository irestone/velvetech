import React, { Component } from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCategories, deleteCategory } from '../store/actions/data/categories'
import {
  editCategory,
  cancelCategoryEditing,
} from '../store/actions/views/categories'

// sub-components
import { EditCategory } from './forms/EditCategory'

// ui
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  withStyles,
  Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CancelIcon from '@material-ui/icons/Cancel'

class CategoryListComponent extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  // categories are sorted asc by default
  get categories() {
    return this.props.categories.slice().sort((a, b) => {
      const aName = a.name.toLowerCase()
      const bName = b.name.toLowerCase()
      return aName < bName ? -1 : aName > bName ? 1 : 0
    })
  }

  render() {
    const {
      editing,
      editCategory,
      cancelCategoryEditing,
      deleteCategory,
      classes,
    } = this.props
    const { categories } = this
    return categories.length ? (
      <List>
        {categories.map((category) => {
          const { _id: id, name } = category
          const isEditing = editing.includes(id)
          return (
            <ListItem disableGutters key={id}>
              <div className={classes.actions}>
                <IconButton onClick={deleteCategory.bind(this, id)}>
                  <DeleteIcon fontSize='small' />
                </IconButton>
                {isEditing ? (
                  <IconButton onClick={cancelCategoryEditing.bind(this, id)}>
                    <CancelIcon fontSize='small' />
                  </IconButton>
                ) : (
                  <IconButton onClick={editCategory.bind(this, id)}>
                    <EditIcon fontSize='small' />
                  </IconButton>
                )}
              </div>

              {isEditing ? (
                <EditCategory
                  form={id}
                  category={category}
                  cancelEditing={cancelCategoryEditing.bind(this, id)}
                />
              ) : (
                <ListItemText className={classes.listItem}>{name}</ListItemText>
              )}
            </ListItem>
          )
        })}
      </List>
    ) : (
      <Typography className={classes.noCat} variant='body1'>
        There are no categories.
      </Typography>
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
  classes: PropTypes.object,
}

// styling
const styles = ({ spacing }) => ({
  noCat: {
    paddingTop: spacing(3),
  },
  actions: {
    marginRight: spacing(1),
  },
})

const Styled = withStyles(styles)(CategoryListComponent)

// todo: optimize selection
export const CategoryList = connect(
  ({
    data: { categories },
    views: {
      categories: { editing },
    },
  }) => ({ categories, editing }),
  { getCategories, deleteCategory, editCategory, cancelCategoryEditing }
)(Styled)
