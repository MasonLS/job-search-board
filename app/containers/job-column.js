//@flow

'use strict';

import { connect } from 'react-redux';
import actionCreators from '../actions/creators';
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
    deleteColumn: (column: String, jobs: Array) => {
      jobs.forEach(job => {
        dispatch(actionCreators.jobs.update(job.url, {column: 'backlog'}));
      });
      dispatch(actionCreators.columns.delete(column));
    }
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(JobColumn);
