//@flow

'use strict';

import { connect } from 'react-redux';
import { deleteColumn } from '../actions';
import JobColumn from '../components/job-board/job-column';

const sortAndFilterJobs = (jobs, column) => {
  const filtered = jobs.filter(job => job.column === column);
  return filtered.sort((jobA, jobB) => jobB.interest - jobA.interest);
}

const mapStateToProps = (state, { column }) => (
  {
    jobs: sortAndFilterJobs(state.jobs, column)
  }
);

const mapDispatchToProps = dispatch => (
  {
    deleteColumn: column => dispatch(deleteColumn(column))
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(JobColumn);
