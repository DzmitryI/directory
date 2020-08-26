import React, {useContext} from "react";
import {Page} from "../../App";

const HeaderComponent = ({flag}) => {

  const { add, rename, remove } = useContext(Page);

  return (
    <div className='header-component'>
      <button className="btn" onClick={() => add(flag)}>add</button>
      <button className="btn" onClick={() => rename(flag)}>rename</button>
      <button className="btn" onClick={remove}>remove</button>
    </div>
  )
}

export default HeaderComponent;