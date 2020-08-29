import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, disabled, onClick, className }) => (
  <button
    type='submit'
    className={`btn ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  className: '',
};

export default Button;
