import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import React from 'react'

export default function FormGroup({
  label,
  placeholder,
  error,
  value,
  inputType,
  onInputChange,
  name
}) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={name}
        isInvalid={error ? true : false}
        type={inputType}
        placeholder={placeholder ? placeholder : label}
        onChange={onInputChange}
        value={value}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  )
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  inputType: PropTypes.string
}

FormGroup.defaultProps = {
  placeholder: null,
  error: null,
  inputType: 'text'
}
