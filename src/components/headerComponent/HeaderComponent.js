import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const HeaderComponent = ({ add, rename, remove, className, disabled }) => (
  <div className='header-component'>
    <Button name='Add' className={className} disabled={disabled} onClick={add} />
    <Button name='Rename' className={className} disabled={disabled} onClick={rename} />
    <Button name='Remove' className={className} disabled={disabled} onClick={remove} />
  </div>
);

HeaderComponent.propTypes = {
  add: PropTypes.func.isRequired,
  rename: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default HeaderComponent;
