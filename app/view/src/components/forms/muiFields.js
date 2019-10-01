import React from 'react'
import PropTypes from 'prop-types'

import {
  TextField as MUITextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

// Text
export const TextField = ({ input, ...custom }) => (
  <MUITextField type='text' {...input} {...custom} />
)

TextField.propTypes = { input: PropTypes.object }

// Number
export const NumberField = ({ input, ...custom }) => (
  <MUITextField type='number' {...input} {...custom} />
)

NumberField.propTypes = { input: PropTypes.object }

// Date
export const DateField = ({ input, ...custom }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      disableToolbar
      variant='inline'
      format='MM/dd/yyyy'
      {...input}
      {...custom}
    />
  </MuiPickersUtilsProvider>
)

DateField.propTypes = { input: PropTypes.object }

// Select
export const SelectField = ({
  name,
  label,
  options = [],
  key = Math.random(),
  input,
  ...custom
}) => (
  <FormControl {...custom} disabled={!options.length}>
    <InputLabel htmlFor={key}>{label}</InputLabel>
    <Select
      {...input}
      inputProps={{
        name,
        id: key,
      }}
    >
      <MenuItem value='uncategorized'>Uncategorized</MenuItem>
      {options.length &&
        options.map(({ _id, name }) => (
          <MenuItem key={_id} value={_id}>
            {name}
          </MenuItem>
        ))}
    </Select>
  </FormControl>
)

SelectField.propTypes = {
  input: PropTypes.object,
  key: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
}
