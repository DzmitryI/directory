import React, { useState } from 'react';
import FolderComponent from './components/folderCompent';
import FolderPages from './pages/folderPage';
import GoodsComponent from './components/goodsComponent';
import GoodPage from './pages/goodPage';
import Header from './components/header';

import goodGroupJSON from './assets/bases/goodgroups.json';
import goodJSON from './assets/bases/goods.json';
import { removeTree } from "./components/helpersComponent";

function App() {
  const [goodGroupBase, setGoodGroupBase] = useState(goodGroupJSON);
  const [goodBaseFull, setGoodBaseFull] = useState(goodJSON);
  const [goodBase, setGoodBase] = useState(goodJSON);

  const [isFolderPage, statusFolderPage] = useState(false);
  const [isGoodPage, statusGoodPage] = useState(false);

  const [curFolder, setCurFolder] = useState({});
  const [curFolderId, setCurFolderId] = useState('');
  const [curGood, setCurGood] = useState({});

  const [statusNewFolder, setStatusNewFolder] = useState(false);
  const [statusNewGood, setStatusNewGood] = useState(false);

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
  const onChangeGoodClick = (good = {}, status = false) => {
    setCurGood(good);
    setStatusNewGood(status);
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
  const onSaveGoodClick = (good) => {
    const goodGroup = goodBaseFull;
    if (statusNewGood) {
      goodGroup.push(good);
      const goods = goodGroup.filter((curGood) => String(curGood.groupKey) === good.groupKey);
      setGoodBase(goods);
      setGoodBaseFull(goodGroup);
    } else {
      const index = goodGroup.findIndex((curGood) => curGood.id === good.id);
      goodGroup[index] = good;
      const goods = goodGroup.filter((curGood) => curGood.groupKey === good.groupKey);
      setGoodBase(goods);
      setGoodBaseFull(goodGroup);
    }
  };

  const onRemoveFolderClick = (id, curFolder) => {
    const arrRemoveFolders = removeTree(goodGroupBase, { id }, curFolder);
    goodGroupBase.map((goodGroup) => delete goodGroup.children);
    const folder = goodGroupBase.filter( ( curFolder ) => (arrRemoveFolders.findIndex( (removeFolder ) => removeFolder.id === curFolder.id) === -1));
    setGoodGroupBase(folder);
    const goodGroup = goodBaseFull.filter((curGood) => (arrRemoveFolders.findIndex( (removeFolder ) => removeFolder.id === curGood.groupKey) === -1) );
    setGoodBaseFull(goodGroup);
  };

  const onRemoveGoodClick = (id, groupKey) => {
    const goodGroup = goodBaseFull.filter((curGood) => String(curGood.id) !== id );
    setGoodBaseFull(goodGroup);
    const goods = goodGroup.filter((curGood) => String(curGood.groupKey) === groupKey);
    setGoodBase(goods);
  };

  const onFolderClick = (id) => {
    const goods = goodBaseFull.filter((curGood) => String(curGood.groupKey) === id);
    setGoodBase(goods);
    setCurFolderId(id);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <FolderComponent
          value={goodGroupBase}
          isFolderPage={isFolderPage}
          changeStatusPage={changeStatusPage}
          onChangeFolderClick={onChangeFolderClick}
          onRemoveFolderClick={onRemoveFolderClick}
          onFolderClick={onFolderClick}
        />
        <GoodsComponent
          value={goodBase}
          goodBaseFull={goodBaseFull}
          isGoodPage={isGoodPage}
          curFolderId={curFolderId}
          changeStatusPage={changeStatusPage}
          onChangeGoodClick={onChangeGoodClick}
          onRemoveGoodClick={onRemoveGoodClick}
        />
      </main>
      {isFolderPage && (
        <FolderPages
          curFolder={curFolder}
          statusNewFolder={statusNewFolder}
          changeStatusPage={changeStatusPage}
          onSaveFolderClick={onSaveFolderClick}
        />
      )}
      {isGoodPage && (
        <GoodPage
          curGood={curGood}
          statusNewGood={statusNewGood}
          changeStatusPage={changeStatusPage}
          onSaveGoodClick={onSaveGoodClick}
        />
        )}
    </div>
  );
}

export default App;
