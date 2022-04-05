import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

 const TextInputGroup = ({label, name, value, placeholder, type, onChange, error}) => {
  return (
    <div className="form-group mb-3">
        <label htmlFor="name">{label}</label>
        <input 
            type={type}
            name={name}
            className={classNames('form-control form-control-lg', {'is-invalid': error})}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    error: PropTypes.string
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default TextInputGroup;
