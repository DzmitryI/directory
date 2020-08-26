import React from 'react';
import FolderComponent from "./components/folderCompent";
import GoodsComponent from "./components/goodsComponent.js";
import Header from "./components/header";
import FolderPages from "./pages/folderPage";
import GoodPage from "./pages/goodPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <FolderComponent/>
        <GoodsComponent/>
      </main>
      <FolderPages/>
      <GoodPage/>
    </div>
  );
}

export default App;
