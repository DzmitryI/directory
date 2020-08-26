import React from "react";

const FolderPage = () => {
  return (
    <div className="folder-page">
      <div className="row-group">
        <label htmlFor="id">Id</label>
        <input type="text" id="id"/>
      </div>
      <div className="row-group">
        <label htmlFor="parent-key-folder">Parent key</label>
        <input type="text" id="parent-key-folder"/>
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

export default FolderPage;