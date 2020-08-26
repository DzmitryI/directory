import React from 'react';
import HeaderComponent from "../headerComponent";

const GoodsComponent = () => {
  return (
    <div className='goods-block'>
      <HeaderComponent/>
      <ol>
        <li>good 1</li>
        <li>good 2</li>
        <li>good 3</li>
        <li>good 4</li>
        <li>good 5</li>
      </ol>
    </div>
  )
}

export default GoodsComponent;