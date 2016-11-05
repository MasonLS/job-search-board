//@flow

'use strict';

import React from 'react';


export default (
  {
    show,
    updateNewColumn,
    addColumn,
    newColumn
  }
) => {
  if (show) {
    return (
      <div className="col s3">
        <div className="row">
          <div className="col s6 input-field">
            <input id="column-name" onChange={updateNewColumn} value={newColumn} />
          </div>
          <div className="col s6">
            <a className="btn-floating waves-effect waves-light white" onClick={addColumn}><i className="material-icons">add</i></a>
          </div>
        </div>
      </div>
    );
  } else return null;
};
