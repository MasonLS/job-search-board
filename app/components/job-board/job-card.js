//@flow

'use strict';

import React from 'react';
import { DragSource } from 'react-dnd';

const jobCardSpec = {
  beginDrag(props) {
    return props.job;
  }
}

const collect = (connect, monitor) => (
  {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
);

class JobCard extends React.Component {

  render () {
    const {
      job,
      deleteJob,
      openLinkInNewTab,
      connectDragSource,
      isDragging
    } = this.props;

    const opacity = isDragging ? 1 : 1;

    const style = {
      opacity: opacity
    };

    return (
      connectDragSource(
        <div className="card" style={style}>
          <div className="card-content">
            <span className="card-title">{job.company}</span>
            <span className="card-title">{job.position}</span>
            </div>
          <div className="card-action">
            <a href="#" onClick={openLinkInNewTab}>Link</a>
            <a href="#" onClick={deleteJob}>Delete</a>
          </div>
        </div>
      )
    )
  }
}

export default DragSource('job', jobCardSpec, collect)(JobCard);
