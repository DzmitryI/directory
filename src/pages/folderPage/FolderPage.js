import React, { useContext } from 'react';
import { Page } from '../../App';
import Backdrop from '../../components/backdrop';

const FolderPage = () => {
  const { close, save } = useContext(Page);

  return (
    <>
      <div className='folder-page'>
        <div className='row-group'>
          <label htmlFor='id'>Id</label>
          <input type="text" id="id" />
        </div>
        <div className='row-group'>
          <label htmlFor='parent-key-folder'>Parent key</label>
          <input type='text' id='parent-key-folder' />
        </div>
        <div className='row-group'>
          <label htmlFor='name-folder'>Name</label>
          <input type='text' id='name-folder' />
        </div>
        <div className='btn-group'>
          <button className='btn' onClick={() => save('folder')}>
            Save
          </button>
          <button className='btn' onClick={() => close('folder')}>
            Close
          </button>
        </div>
      </div>
      <Backdrop flag='folder' />
    </>
  );
};

export default FolderPage;
