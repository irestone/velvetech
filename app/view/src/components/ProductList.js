import React from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'
import { deleteProducts, updateProduct } from '../store/actions/data/products'

// utils
import { format } from 'date-fns'
import { dateFormat } from '../utils/constants'

// components
import { CommandButton } from './grid/CommandButton'
import { EditCell } from './grid/EditCell'

// ui
import {
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
  SearchState,
  IntegratedFiltering,
  EditingState,
  DataTypeProvider,
} from '@devexpress/dx-react-grid'
import {
  Grid,
  Table,
  TableHeaderRow,
  Toolbar,
  PagingPanel,
  SearchPanel,
  TableEditColumn,
  TableEditRow,
} from '@devexpress/dx-react-grid-material-ui'

// Formatters

const PriceFormatter = ({ value }) => value + ' \u20BD'
const CategoryFormatter = ({ value }) => value.name

// =====================================
//  BASE
// =====================================

const ProductListBase = ({ products, updateProduct, deleteProducts }) => {
  const onCommitChanges = ({ changed, deleted }) => {
    if (changed) {
      // eslint-disable-next-line
      for (const [id, values] of Object.entries(changed)) {
        updateProduct(id, values)
      }
    }

    if (deleted) deleteProducts(deleted)
  }

  return (
    <Grid
      columns={[
        { name: 'name', title: 'Name' },
        { name: 'price', title: 'Price' },
        {
          name: 'shelfLife',
          title: 'Shelf Life',
          getCellValue: ({ shelfLife }) =>
            format(new Date(shelfLife), dateFormat),
        },
        { name: 'category', title: 'Category' },
      ]}
      rows={products}
      getRowId={({ _id }) => _id}
    >
      <DataTypeProvider for={['price']} formatterComponent={PriceFormatter} />
      <DataTypeProvider
        for={['category']}
        formatterComponent={CategoryFormatter}
      />
      <SortingState
        defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
      />
      <PagingState defaultCurrentPage={0} defaultPageSize={10} />
      <SearchState />
      <EditingState onCommitChanges={onCommitChanges} />
      <IntegratedSorting />
      <IntegratedPaging />
      <IntegratedFiltering />
      <Table />
      <TableHeaderRow showSortingControls />
      <TableEditRow cellComponent={EditCell} />
      <TableEditColumn
        showEditCommand
        showDeleteCommand
        commandComponent={CommandButton}
      />
      <Toolbar />
      <PagingPanel pageSizes={[10, 50, 250, 0]} />
      <SearchPanel />
    </Grid>
  )
}

ProductListBase.propTypes = {
  products: PropTypes.array,
  updateProduct: PropTypes.func,
  deleteProducts: PropTypes.func,
}

// =====================================
//  WRAPPINGS
// =====================================

export const ProductList = connect(
  ({ data: { products } }) => ({ products }),
  { updateProduct, deleteProducts }
)(ProductListBase)
