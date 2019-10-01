import React from 'react'

// state
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  showCreateCategoryForm,
  hideCreateCategoryForm,
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
  showCreateCategoryForm,
  hideCreateCategoryForm,
}) => {
  const classes = useStyles()
  return (
    <Box>
      <Typography variant='h3'>Categories</Typography>
      <div className={classes.creatingForm}>
        {isAddCategoryFormHidden ? (
          <Button
            color='primary'
            onClick={showCreateCategoryForm}
            className={classes.newCategoryButton}
          >
            New category
          </Button>
        ) : (
          <AddCategory cancel={hideCreateCategoryForm} />
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
  showCreateCategoryForm: PropTypes.func,
  hideCreateCategoryForm: PropTypes.func,
}

export const Categories = connect(
  ({
    views: {
      categories: { isAddCategoryFormHidden },
    },
  }) => ({ isAddCategoryFormHidden }),
  { showCreateCategoryForm, hideCreateCategoryForm }
)(CategoriesComponent)
