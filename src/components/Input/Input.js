import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, value, label, onChange, disabled }) => (
  <div className='input-group'>
    <label htmlFor={id}>{label}</label>
    <input type='text' key={id} id={id} value={value} onChange={onChange} disabled={disabled} />
  </div>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Input;
