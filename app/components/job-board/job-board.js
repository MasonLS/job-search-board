//@flow

'use strict';

import React from 'react';
import JobColumn from '../../containers/job-column';
import NewColumnForm from '../../containers/new-column-form';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class JobBoard extends React.Component {

  render () {
    const { columns } = this.props;

    return (
      <div className="row">
        {columns.map((column, i) => <JobColumn key={i} column={column} />)}
        <NewColumnForm show={columns.length < 4} />
      </div>
    );
  }
}


export default DragDropContext(HTML5Backend)(JobBoard);
