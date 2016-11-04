//@flow

'use strict';

import React from 'react';
import JobCard from './job-card';

export default (
  {
    jobs,
    column,
    deleteColumn
  }
) => (
  <div className="col s3">
    <div className="row">
      <div className="col s7">
        <h4>{column}</h4>
      </div>
      <div className="col s5">
        <a className="btn-floating waves-effect waves-light white" onClick={() => deleteColumn(column)}><i className="material-icons">delete</i></a>
      </div>
    </div>
    {jobs.map((job, i) => <JobCard key={i} job={job} />)}
  </div>
);
