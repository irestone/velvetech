import React from 'react'
import PropTypes from 'prop-types'

import { dateFormat } from '../../utils/constants'

import {
  TextField as MUITextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
} from '@material-ui/core'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

// =====================================
//  FIELDS
// =====================================

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
      format={dateFormat}
      {...input}
      {...custom}
    />
  </MuiPickersUtilsProvider>
)

DateField.propTypes = { input: PropTypes.object }

// Select
// todo: option = { value, name } - more generic
export const SelectField = ({
  name,
  label,
  options = [],
  key = Math.random(),
  input,
  helperText,
  ...custom
}) => (
  <FormControl {...custom} disabled={!options.length}>
    {label && <InputLabel htmlFor={key}>{label}</InputLabel>}
    <Select {...input} inputProps={{ name, id: key }}>
      {options.length &&
        options.map(({ _id, name }) => (
          <MenuItem key={_id} value={_id}>
            {name}
          </MenuItem>
        ))}
    </Select>
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
)

SelectField.propTypes = {
  input: PropTypes.object,
  key: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.any,
  options: PropTypes.array,
}
