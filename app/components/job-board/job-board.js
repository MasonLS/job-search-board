//@flow

'use strict';

import React from 'react';
import JobColumn from '../../containers/job-column';
import NewColumnForm from '../../containers/new-column-form';


export default ({
  columns
}) => (
  <div className="row">
    {columns.map((column, i) => <JobColumn key={i} column={column} />)}
    <NewColumnForm show={columns.length < 4} />
  </div>
);
