import React from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import { getCategories, deleteCategory } from '../store/actions/data/categories'
import { editCategory } from '../store/actions/views/categories'

// components
import { EditCategory } from './forms/EditCategory'

// ui
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles(({ spacing }) => ({
  noCategories: {
    paddingTop: spacing(3),
  },
  actions: {
    marginRight: spacing(1),
  },
}))

// =====================================
//  BASE
// =====================================

const CategoryListBase = ({
  categories,
  editing,
  editCategory,
  deleteCategory,
}) => {
  const sortAsc = () =>
    categories.slice().sort((a, b) => {
      const aName = a.name.toLowerCase()
      const bName = b.name.toLowerCase()
      return aName < bName ? -1 : aName > bName ? 1 : 0
    })

  const classes = useStyles()

  return categories.length ? (
    <List>
      {sortAsc().map((category) => {
        const { _id: id, name } = category
        const beingEdited = editing.includes(id)
        return (
          <ListItem disableGutters key={id}>
            {beingEdited ? (
              <EditCategory form={id} category={category} />
            ) : (
              <>
                <span className={classes.actions}>
                  <IconButton title='Edit' onClick={() => editCategory(id)}>
                    <EditIcon fontSize='small' />
                  </IconButton>
                  <IconButton title='Delete' onClick={() => deleteCategory(id)}>
                    <DeleteIcon fontSize='small' />
                  </IconButton>
                </span>
                <ListItemText className={classes.listItem}>{name}</ListItemText>
              </>
            )}
          </ListItem>
        )
      })}
    </List>
  ) : (
    <Typography className={classes.noCategories} variant='body1'>
      There are no categories.
    </Typography>
  )
}

CategoryListBase.propTypes = {
  categories: PropTypes.array,
  editing: PropTypes.array,
  getCategories: PropTypes.func,
  deleteCategory: PropTypes.func,
  editCategory: PropTypes.func,
  classes: PropTypes.object,
}

// =====================================
//  WRAPPINGS
// =====================================

export const CategoryList = connect(
  ({
    data: { categories },
    views: {
      categories: { editing },
    },
  }) => ({ categories, editing }),
  { getCategories, deleteCategory, editCategory }
)(CategoryListBase)
