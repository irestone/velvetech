import React from 'react'
import PropTypes from 'prop-types'

// state
import { connect } from 'react-redux'

// components
import {
  TextField,
  DateField,
  NumberField,
  dateFormat,
} from '../forms/muiFields'

// utils
import { parse } from 'date-fns'

// ui
import { TableCell } from '@material-ui/core'
import { TableEditRow } from '@devexpress/dx-react-grid-material-ui'

// =====================================
//  CELLS
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

const ShelfLifeEditCell = ({ input: { value, onChange }, ...rest }) => (
  <TableCell>
    <DateField
      name='shelfLife'
      placeholder='Shelf Life'
      value={parse(value, dateFormat, new Date())}
      onChange={onChange}
      {...rest}
    />
  </TableCell>
)
ShelfLifeEditCell.propTypes = { input: PropTypes.object }

const CategoryEditCell = connect(({ data: { categories } }) => ({
  categories,
}))(({ input: { value, onChange }, categories }) => (
  <TableCell>
    <select value={value._id || value} onChange={onChange}>
      {categories.length &&
        categories.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name}
          </option>
        ))}
    </select>
  </TableCell>
))

const editCellComponents = {
  name: NameEditCell,
  price: PriceEditCell,
  shelfLife: ShelfLifeEditCell,
  category: CategoryEditCell,
}

// =====================================
//  EDIT CELL
// =====================================

export const EditCell = (props) => {
  const { column, value, onValueChange } = props

  const onChange = (e) => {
    const value = e.target ? e.target.value : e
    return onValueChange(value)
  }

  const EditCell = editCellComponents[column.name]

  return EditCell ? (
    <EditCell input={{ value, onChange }} />
  ) : (
    <TableEditRow.Cell {...props} />
  )
}

EditCell.propTypes = {
  column: PropTypes.object,
  row: PropTypes.object,
  value: PropTypes.any,
  onValueChange: PropTypes.func,
}
