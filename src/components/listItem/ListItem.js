import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ item, click }) => {
  let children = null;
  if (item.children && item.children.length) {
    children = (
      <ul className='container'>
        {item.children.map((i) => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
    );
  }

  return (
    <li className='node expandClose' key={item.id} id={item.id} onClick={click}>
      <div className='expand'></div>
      <div className='content' id={`${item.id}-div`}>{item.name}</div>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  click: PropTypes.func,
};

export default ListItem;
