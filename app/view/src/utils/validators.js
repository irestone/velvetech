import validate from 'validate.js'
import { format, addDays } from 'date-fns'
import { dateFormat } from './constants'

// setup

validate.extend(validate.validators.datetime, {
  parse: (value) => new Date(value).setHours(0, 0, 0, 0),
  format: (ms) => format(new Date(ms), dateFormat),
})

// validators

export const validateCategory = (values) =>
  validate(values, {
    name: { presence: { allowEmpty: false } },
  })

export const validateProduct = (values) =>
  validate(values, {
    name: {
      presence: { allowEmpty: false },
      length: {
        minimum: 5,
        maximum: 40,
      },
    },
    price: {
      presence: { allowEmpty: false },
      numericality: {
        greaterThan: 0,
      },
    },
    shelfLife: {
      presence: { allowEmpty: false },
      datetime: {
        earliest: addDays(new Date(), 1),
      },
    },
    category: {
      presence: { allowEmpty: false },
    },
  })
