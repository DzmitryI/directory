import React from 'react';

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
    <li className='node expandClose' id={item.id} onClick={click}>
      <div className='expand'></div>
      <div className='content' id={`${item.id}-div`}>{item.name}</div>
      {children}
    </li>
  );
}

export default ListItem;
