import React from 'react';
import FolderComponent from "./components/folderCompent";
import GoodsComponent from "./components/goodsComponent.js";
import Header from "./components/header";

import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <main>
          <FolderComponent/>
          <GoodsComponent/>
        </main>
      </>
    </div>
  );
}

export default App;
