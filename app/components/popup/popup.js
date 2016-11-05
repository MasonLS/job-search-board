//@flow

'use strict';

import React, { Component } from 'react';

export default ({
  newJob,
  openJobBoard,
  handleUpdate,
  handleSubmit
}) => (
  <div className="root">
     <div className="container">
      <div className="row">
        <div className="input-field col s5">
          <i className="material-icons prefix">domain</i>
          <input className="validate" type="text" tabIndex="-1" onChange={(e) => handleUpdate('company', e.target.value)} value={newJob.company} />
          <label>Company</label>
        </div>
        <div className="input-field col s5">
          <i className="material-icons prefix">person_outline</i>
          <input className="validate" type="text" tabIndex="-1" onChange={(e) => handleUpdate('position', e.target.value)} value={newJob.position} />
          <label>Position</label>
        </div>
        <div className="input-field col s2" id="add-btn">
          <a className="btn-floating waves-effect waves-light white" onClick={handleSubmit}><i className="material-icons">add</i></a>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s5">
          <textarea className="materialize-textarea" tabIndex="-1" onChange={(e) => handleUpdate('notes', e.target.value)} value={newJob.notes}></textarea>
          <label>Notes</label>
        </div>
        <div className="input-field col s5">
          <select className="browser-default" onChange={(e) => handleUpdate('interest', e.target.value)} value={newJob.interest}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="input-field col s2" id="board-btn">
        <a className="btn-floating waves-effect waves-light white" onClick={openJobBoard}><i className="material-icons">dashboard</i></a>
        </div>
      </div>
    </div>
  </div>
);
