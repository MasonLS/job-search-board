//@flow

'use strict';

import React, { Component } from 'react';
import actionCreators from '../../actions/creators';

const Job = () => (
  {
    company: '',
    position: '',
    notes: '',
    interest: ''
  }
);

export default class Popup extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      newJob: Job()
    }
  }

  handleUpdate(updatedInfo: Object) {
    this.setState(
      {
        newJob: {
          ...this.state.newJob,
          ...updatedInfo
        }
      }
    );
  }

  handleSubmit() {
    this.props.addJob(this.state.newJob, this.props.url);
    this.setState(
      {
        newJob: Job()
      }
    );
  }

  openJobBoard() {
    chrome.tabs.create({
      url: './job-board.html'
    });
  }

  render() {
    return (
      <div className="root">
         <div className="container">
          <div className="row">
            <div className="input-field col s5">
              <i className="material-icons prefix">domain</i>
              <input className="validate" type="text" tabIndex="-1" onChange={(e) => this.handleUpdate({'company': e.target.value})} value={this.state.newJob.company} />
              <label>Company</label>
            </div>
            <div className="input-field col s5">
              <i className="material-icons prefix">person_outline</i>
              <input className="validate" type="text" tabIndex="-1" onChange={(e) => this.handleUpdate({'position': e.target.value})} value={this.state.newJob.position} />
              <label>Position</label>
            </div>
            <div className="input-field col s2" id="add-btn">
              <a className="btn-floating waves-effect waves-light white" onClick={this.handleSubmit.bind(this)}><i className="material-icons">add</i></a>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5">
              <textarea className="materialize-textarea" tabIndex="-1" onChange={(e) => this.handleUpdate({'notes': e.target.value})} value={this.state.newJob.notes}></textarea>
              <label>Notes</label>
            </div>
            <div className="input-field col s5">
              <select className="browser-default" tabIndex="-1" onChange={(e) => handleUpdate({'interest': e.target.value})} value={this.state.newJob.interest}>
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
            <a className="btn-floating waves-effect waves-light white" onClick={this.openJobBoard}><i className="material-icons">dashboard</i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
