import React from "react";

const Input = ({id, value, label, onChange, type = 'text', disabled}) => {
  return (
    <div className='input-group'>
      <label htmlFor={id}>{label}</label>
      <input type={type} key={id} id={id} value={value} onChange={onChange} disabled={disabled} />
    </div>
  )
}

export default Input;