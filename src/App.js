import React, { createContext, useState } from 'react';
import FolderComponent from './components/folderCompent';
import FolderPages from './pages/folderPage';
import GoodsComponent from './components/goodsComponent';
import GoodPage from './pages/goodPage';
import Header from './components/header';

import goodgroupJSON from './assets/bases/goodgroups.json';

import './App.css';

export const Page = createContext();

function App() {
  const [goodGroupBase, setGoodGroupBase] = useState(goodgroupJSON);
  const [isFolderPage, statusFolderPage] = useState(false);
  const [isGoodPage, statusGoodPage] = useState(false);
  const [curFolder, setCurFolder] = useState({});
  const [statusNewFolder, setStatusNewFolder] = useState(false);

  const add = (flag) => {
    if (flag === 'folder') {
      statusFolderPage(true);
    } else {
      statusGoodPage(true);
    }
  };

  const rename = (flag) => {
    if (flag === 'folder') {
      statusFolderPage(true);
    } else {
      statusGoodPage(true);
    }
  };

  const remove = () => {
    console.log(`remove ${'flag'}`);
  };

  const changeStatusPage = (flag, status) => {
    if (flag === 'folder') {
      statusFolderPage(status);
    } else {
      statusGoodPage(status);
    }
  };

  const onChangeFolderClick = (folder = {}, status = false) => {
    setCurFolder(folder);
    setStatusNewFolder(status);
  };

  const onSaveFolderClick = (folder) => {
    const goodGroup = goodGroupBase;
    if (statusNewFolder) {
      goodGroup.push(folder);
      setGoodGroupBase(goodGroup);
    } else {
      const index = goodGroup.findIndex((curFolder) => curFolder.id === folder.id);
      goodGroup[index] = folder;
      setGoodGroupBase(goodGroup);
    }
  };

  const onRemoveFolderClick = (id) => {
    const goodGroup = goodGroupBase.filter((curFolder) => String(curFolder.id) !== id && String(curFolder.parentKey) !== id);
    setGoodGroupBase(goodGroup);
  };

  const close = (flag) => {
    if (flag === 'folder') {
      statusFolderPage(false);
    } else {
      statusGoodPage(false);
    }
  };

  const save = (flag) => {
    if (flag === 'folder') {
      statusFolderPage(false);
    } else {
      statusGoodPage(false);
    }
  };

  return (
    <div className="App">
      <Page.Provider
        value={{
          add,
          remove,
          rename,
          close,
          save,
        }}
      >
        <Header />
        <main>
          <FolderComponent
            value={goodGroupBase}
            isFolderPage={isFolderPage}
            changeStatusPage={changeStatusPage}
            onChangeFolderClick={onChangeFolderClick}
            onRemoveFolderClick={onRemoveFolderClick}
          />
          <GoodsComponent />
        </main>
        {isFolderPage && (
          <FolderPages
            curFolder={curFolder}
            statusNewFolder={statusNewFolder}
            changeStatusPage={changeStatusPage}
            onSaveFolderClick={onSaveFolderClick}
          />
        )}
        {isGoodPage && <GoodPage />}
      </Page.Provider>
    </div>
  );
}

export default App;
