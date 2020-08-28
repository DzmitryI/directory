import React from 'react';

const Button = ({ name, type = 'submit', disabled = false, onClick, className = null }) => (
  <button type={type} className={`btn ${className}`} onClick={onClick} disabled={disabled}>
    {name}
  </button>
);

export default Button;