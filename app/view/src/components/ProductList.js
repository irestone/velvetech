import React from 'react'
import PropTypes from 'prop-types'

// utils
import { format } from 'date-fns'

// state
import { connect } from 'react-redux'
import { deleteProducts, updateProduct } from '../store/actions/data/products'

// ui
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
import { IconButton, TableCell } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'
import {
  TextField,
  DateField,
  NumberField,
  dateFormat,
} from './forms/muiFields'
import { parse } from 'date-fns/esm'

// =====================================
//  EDIT COLUMN: Custom command buttons
// =====================================

// Buttons

const EditButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title='Edit'>
    <EditIcon fontSize='small' />
  </IconButton>
)

const DeleteButton = ({ onExecute }) => (
  <IconButton
    onClick={() =>
      window.confirm('Are you sure you want to delete this product?') &&
      onExecute()
    }
    title='Delete'
  >
    <DeleteIcon fontSize='small' />
  </IconButton>
)

const CommitButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title='Save changes'>
    <SaveIcon fontSize='small' />
  </IconButton>
)

const CancelButton = ({ onExecute }) => (
  <IconButton color='secondary' onClick={onExecute} title='Cancel changes'>
    <CancelIcon fontSize='small' />
  </IconButton>
)

CancelButton.propTypes = CommitButton.propTypes = DeleteButton.propTypes = EditButton.propTypes = {
  onExecute: PropTypes.func,
}

// Buttons map

const commandComponents = {
  edit: EditButton,
  delete: DeleteButton,
  commit: CommitButton,
  cancel: CancelButton,
}

// Command components picker

const Command = ({ id, onExecute }) => {
  const CommandButton = commandComponents[id]
  return <CommandButton onExecute={onExecute} />
}

Command.propTypes = { id: PropTypes.string, onExecute: PropTypes.func }

// =====================================
//  EDIT ROW: Custom cells
// =====================================

const NameEditCell = (props) => (
  <TableCell>
    <TextField name='name' placeholder='Name' {...props} />
  </TableCell>
)

const PriceEditCell = (props) => (
  <TableCell>
    <NumberField name='price' placeholder='Price' {...props} />
  </TableCell>
)

const DateEditCell = (props) => (
  <TableCell>
    <DateField name='shelfLife' placeholder='Shelf Life' {...props} />
  </TableCell>
)

// todo: correct current option (now it's getting cell's text - category name - instead of category ID as value)
const SelectEditCell = connect(({ data: { categories } }) => ({ categories }))(
  ({ input, categories }) => (
    <TableCell>
      <select {...input}>
        {categories.length &&
          categories.map(({ _id, name }) => (
            <option key={_id} value={_id}>
              {name}
            </option>
          ))}
      </select>
    </TableCell>
  )
)

const EditCell = (props) => {
  const { value, onValueChange } = props

  const onChange = (e) => {
    const newValue = e.target ? e.target.value : e
    return onValueChange(newValue)
  }

  switch (props.column.name) {
    case 'name':
      return <NameEditCell input={{ value, onChange }} />
    case 'price':
      return <PriceEditCell input={{ value, onChange }} />
    case 'shelfLife':
      return (
        <DateEditCell
          input={{ value: parse(value, dateFormat, new Date()), onChange }}
        />
      )
    case 'category':
      // If the 'value' is an object (category) -> it's the first render
      // Folowing rerenders will be triggered by 'onChange(newValue)'
      // where 'newValue' is a string (ID itself)
      return <SelectEditCell input={{ value: value._id || value, onChange }} />
    default:
      return <TableEditRow.Cell {...props} />
  }
}

EditCell.propTypes = {
  column: PropTypes.object,
  row: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func,
}

// =====================================
//  DATA TO CELL FORMATTING
// =====================================

const PriceFormatter = ({ value }) => value + ' \u20BD'
const CategoryFormatter = ({ value }) => value.name

// =====================================
//  PRODUCT LIST
// =====================================

const ProductListComponent = ({ products, updateProduct, deleteProducts }) => {
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
        commandComponent={Command}
      />
      <Toolbar />
      <PagingPanel pageSizes={[10, 50, 250, 0]} />
      <SearchPanel />
    </Grid>
  )
}

ProductListComponent.propTypes = {
  products: PropTypes.array,
  updateProduct: PropTypes.func,
  deleteProducts: PropTypes.func,
}

export const ProductList = connect(
  ({ data: { products } }) => ({ products }),
  { updateProduct, deleteProducts }
)(ProductListComponent)
