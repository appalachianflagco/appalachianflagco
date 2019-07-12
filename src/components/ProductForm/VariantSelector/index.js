import React from 'react'
import PropTypes from 'prop-types'
import { Select, Form } from 'antd'
const VariantSelector = props => {
  const { option } = props
  return (
    <Select
      name={option.name}
      key={option.id}
      onChange={value => props.onChange(option.name, value)}
      style={{ display: 'inline-block', width: 'auto' }}
      defaultValue={option.values[0]}
    >
      {option.values.map(value => {
        return (
          <Select.Option
            value={value}
            key={`${option.name}-${value}`}
          >{`${value}`}</Select.Option>
        )
      })}
    </Select>
  )
}

VariantSelector.propTypes = {
  onChange: PropTypes.func,
  option: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default VariantSelector
