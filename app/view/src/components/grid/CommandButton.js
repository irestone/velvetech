import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'

// =====================================
//  BUTTONS
// =====================================

const EditCommandButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title='Edit'>
    <EditIcon fontSize='small' />
  </IconButton>
)

const DeleteCommandButton = ({ onExecute }) => (
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

const CommitCommandButton = ({ onExecute }) => (
  <IconButton onClick={onExecute} title='Save changes'>
    <SaveIcon fontSize='small' />
  </IconButton>
)

const CancelCommandButton = ({ onExecute }) => (
  <IconButton color='secondary' onClick={onExecute} title='Cancel changes'>
    <CancelIcon fontSize='small' />
  </IconButton>
)

CancelCommandButton.propTypes = CommitCommandButton.propTypes = DeleteCommandButton.propTypes = EditCommandButton.propTypes = {
  onExecute: PropTypes.func,
}

const commandButtonComponents = {
  edit: EditCommandButton,
  delete: DeleteCommandButton,
  commit: CommitCommandButton,
  cancel: CancelCommandButton,
}

// =====================================
//  COMMAND BUTTON
// =====================================

export const CommandButton = ({ id, onExecute }) => {
  const CommandButton = commandButtonComponents[id]
  return <CommandButton onExecute={onExecute} />
}

CommandButton.propTypes = { id: PropTypes.string, onExecute: PropTypes.func }
