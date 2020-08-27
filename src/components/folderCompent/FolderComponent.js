import React from 'react';
import HeaderComponent from '../headerComponent';

const FolderComponent = () => (
  <div className='folder-block'>
    <HeaderComponent flag='folder' />
    <ol>
      <li>folder 1</li>
      <li>folder 2</li>
      <li>folder 3</li>
      <li>folder 4</li>
      <li>folder 5</li>
    </ol>
  </div>
);

export default FolderComponent;
