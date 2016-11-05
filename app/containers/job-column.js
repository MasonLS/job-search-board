//@flow

'use strict';

import { connect } from 'react-redux';
import { deleteColumn } from '../actions';
import JobColumn from '../components/job-board/job-column';


const mapStateToProps = (state, { column }) => (
  {
    jobs: state.jobs.filter(job => job.column === column)
  }
);

const mapDispatchToProps = dispatch => (
  {
    deleteColumn: columnName => dispatch(deleteColumn(columnName))
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(JobColumn);
