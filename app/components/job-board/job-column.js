//@flow

'use strict';

import React from 'react';
import JobCard from '../../containers/job-card';
import { DropTarget } from 'react-dnd';
import { Store } from 'react-chrome-redux';
import { updateJob } from '../../actions';

const store = new Store({ portName: 'MY_APP' });

const jobColumnSpec = {
  drop({ column }, monitor) {
    const { url } = monitor.getItem();
    store.dispatch(updateJob(url, 'column', column));
  }
}

const collect = (connect, monitor) => (
  {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
);

class JobColumn extends React.Component {
  render () {
    const {
      jobs,
      column,
      deleteColumn,
      connectDropTarget
    } = this.props;

    const style = {
      height: 500
    }

    return connectDropTarget(
      <div className="col s3">
        <div className="row">
          <div className="col s7">
            <h4>{column}</h4>
          </div>
          <div className="col s5">
            <a className="btn-floating waves-effect waves-light white" onClick={() => deleteColumn(column)}><i className="material-icons">delete</i></a>
          </div>
        </div>
        <div style={style}>
            {jobs.map((job, i) => <JobCard key={i} job={job} />)}
        </div>
      </div>
    );
  }
}

export default DropTarget('job', jobColumnSpec, collect)(JobColumn);
