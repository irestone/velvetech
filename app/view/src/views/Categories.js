import React from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import {
  showAddCategoryForm,
  hideAddCategoryForm,
} from '../store/actions/views/categories'

// components
import { AddCategory } from '../components/forms/AddCategory'
import { CategoryList } from '../components/CategoryList'

// ui
import { Typography, makeStyles, Button, Box } from '@material-ui/core'

const useStyles = makeStyles(({ spacing }) => ({
  creatingForm: {
    marginTop: spacing(3),
  },
  newCategoryButton: {
    marginTop: spacing(2),
  },
}))

// =====================================
//  BASE
// =====================================

export const CategoriesBase = ({
  isAddCategoryFormHidden,
  showAddCategoryForm,
  hideAddCategoryForm,
}) => {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant='h3'>Categories</Typography>
      <div className={classes.creatingForm}>
        {isAddCategoryFormHidden ? (
          <Button
            color='primary'
            onClick={showAddCategoryForm}
            className={classes.newCategoryButton}
          >
            New category
          </Button>
        ) : (
          <AddCategory cancel={hideAddCategoryForm} />
        )}
      </div>
      <Box mt={2}>
        <CategoryList />
      </Box>
    </Box>
  )
}

CategoriesBase.propTypes = {
  isAddCategoryFormHidden: PropTypes.bool,
  showAddCategoryForm: PropTypes.func,
  hideAddCategoryForm: PropTypes.func,
}

// =====================================
//  WRAPPINGS
// =====================================

export const Categories = connect(
  ({ views: { categories } }) => ({
    isAddCategoryFormHidden: categories.isAddCategoryFormHidden,
  }),
  { showAddCategoryForm, hideAddCategoryForm }
)(CategoriesBase)
