import React from 'react';
import Input from '../components/Input';

function renderInputs(inputs, onChange) {
  return Object.keys(inputs).map((curName) => {
    const { label, value, disabled = false } = inputs[curName];
    return <Input id={curName} value={value} disabled={disabled} label={label} onChange={onChange(curName)} />;
  });
}

function updateInput(objInput, objValues) {
  const objInputUpdate = { ...objInput };
  Object.entries(objValues).forEach(([key, value]) => {
    if (objInputUpdate[key]) {
      objInputUpdate[key].value = value;
    }
  });
  return objInputUpdate;
}

function clearObjectValue(objInput) {
  const objInputClear = { ...objInput };
  Object.keys(objInputClear).forEach((key) => {
    if (objInputClear[key]) {
      objInputClear[key].value = '';
    }
  });
  return objInputClear;
}

export { renderInputs, updateInput, clearObjectValue };
