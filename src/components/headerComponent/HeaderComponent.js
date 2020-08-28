import React from 'react';
import Button from '../Button';

const HeaderComponent = ({ add, rename, remove, className, disabled }) => (
  <div className='header-component'>
    <Button name='Add' className={className} disabled={disabled} onClick={add} />
    <Button name='Rename' className={className} disabled={disabled} onClick={rename} />
    <Button name='Remove' className={className} disabled={disabled} onClick={remove} />
  </div>
);

export default HeaderComponent;
