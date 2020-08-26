import React, {useContext} from "react";
import {Page} from "../../App";
import Backdrop from "../../components/backdrop";

const GoodPage = () => {
  const {close, save} = useContext(Page);

  return (
    <>
      <div className="folder-page">
        <div className="row-group">
          <label htmlFor="id">Id</label>
          <input type="text" id="id"/>
        </div>
        <div className="row-group">
          <label htmlFor="group-key-good">Group key</label>
          <input type="text" id="group-key-good"/>
        </div>
        <div className="row-group">
          <label htmlFor="name-folder">Name</label>
          <input type="text" id="name-folder"/>
        </div>
        <div className="btn-group">
          <button className="btn" onClick={() => save('good')}>Save</button>
          <button className="btn" onClick={() => close('good')}>Close</button>
        </div>
      </div>
      <Backdrop flag='good'/>
    </>
  )
}

export default GoodPage;