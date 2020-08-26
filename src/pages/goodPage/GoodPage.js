import React from "react";

const GoodPage = () => {
  return (
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
        <button className="btn">Save</button>
        <button className="btn">Close</button>
      </div>
    </div>
  )
}

export default GoodPage;