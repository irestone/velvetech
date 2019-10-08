import React from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  showAddCategoryForm,
  hideAddCategoryForm,
} from '../store/actions/views/categories'

// sub-components
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

// component
export const CategoriesComponent = ({
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

CategoriesComponent.propTypes = {
  isAddCategoryFormHidden: PropTypes.bool,
  showAddCategoryForm: PropTypes.func,
  hideAddCategoryForm: PropTypes.func,
}

export const Categories = connect(
  ({
    views: {
      categories: { isAddCategoryFormHidden },
    },
  }) => ({ isAddCategoryFormHidden }),
  { showAddCategoryForm, hideAddCategoryForm }
)(CategoriesComponent)
