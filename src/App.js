import React, {createContext, useState} from 'react';
import FolderComponent from "./components/folderCompent";
import GoodsComponent from "./components/goodsComponent.js";
import Header from "./components/header";
import FolderPages from "./pages/folderPage";
import GoodPage from "./pages/goodPage";

import './App.css';

export const Page = createContext()

function App() {
  const [isFolderPage, statusFolderPage] = useState(false);
  const [isGoodPage, statusGoodPage] = useState(false);

  const add = (flag) => {
    if (flag === 'folder') {
      statusFolderPage(true);
    } else {
      statusGoodPage(true);
    }
  }

  const rename = (flag) => {
    if (flag === 'folder') {
      statusFolderPage(true);
    } else {
      statusGoodPage(true);
    }
  }

  const remove = () => {
    console.log(`remove ${'flag'}`)
  }


  const close = (flag) => {
    if (flag === 'folder') {
      statusFolderPage(false);
    } else {
      statusGoodPage(false);
    }
  }

  const save = (flag) => {
    if (flag === 'folder') {
      statusFolderPage(false);
    } else {
      statusGoodPage(false);
    }
  }

  return (
    <div className="App">
      <Page.Provider value={{add, remove, rename, close, save}}>
        <Header/>
        <main>
          <FolderComponent/>
          <GoodsComponent/>
        </main>
        {isFolderPage && <FolderPages/>}
        {isGoodPage && <GoodPage/>}
      </Page.Provider>
    </div>
  );
}

export default App;
