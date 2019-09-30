import React from 'react'
import PropTypes from 'prop-types'

import { TextField as MUITextField } from '@material-ui/core'

export const TextField = ({ input, ...custom }) => (
  <MUITextField {...input} {...custom} />
)

TextField.propTypes = { input: PropTypes.object }
