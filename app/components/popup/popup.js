//@flow

'use strict';

import React, { Component } from 'react';

export default ({
  newJob,
  openJobBoard,
  handleSubmit,
  handleCompanyChange,
  handlePositionChange
}) => (
  <div className="root">
     <div className="container">
      <div className="row">
        <div className="input-field col s5">
          <i className="material-icons prefix">domain</i>
          <input className="validate" type="text" tabIndex="-1" onChange={handleCompanyChange} value={newJob.company} />
          <label>Company</label>
        </div>
        <div className="input-field col s5">
          <i className="material-icons prefix">person_outline</i>
          <input className="validate" type="text" tabIndex="-1" onChange={handlePositionChange} value={newJob.position} />
          <label>Position</label>
        </div>
        <div className="input-field col s2" id="add-btn">
          <a className="btn-floating waves-effect waves-light white" onClick={handleSubmit}><i className="material-icons">add</i></a>
        </div>
      </div>
      <div className="row">
        <div className="col s10">
        </div>
        <div className="input-field col s2" id="board-btn">
        <a className="btn-floating waves-effect waves-light white" onClick={openJobBoard}><i className="material-icons">dashboard</i></a>
        </div>
      </div>
    </div>
  </div>
);
