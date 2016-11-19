//@flow

'use strict';

import React from 'react';


export default class extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      column: ''
    }
  }

  handleUpdate(e) {
    this.setState({column: e.target.value});
  }

  handleSubmit() {
    this.props.addColumn(this.state.column);
    this.setState({column: ''});
  }

  render() {
    return (
      <div className="col s3">
        <div className="row">
          <div className="col s6 input-field">
            <input id="column-name" onChange={this.handleUpdate.bind(this)} value={this.state.column}/>
          </div>
          <div className="col s6">
            <a className="btn-floating waves-effect waves-light white" onClick={this.handleSubmit.bind(this)}><i className="material-icons">add</i></a>
          </div>
        </div>
      </div>
    );
  }

}
