//@flow

'use strict';

import { connect } from 'react-redux';
import JobCard from '../components/job-board/job-card';
import actionCreators from '../actions/creators';


const mapDispatchToProps = (dispatch, ownProps) => (
  {
    openLinkInNewTab: () => {
      chrome.tabs.create({url: ownProps.job.url});
    },
    deleteJob: () => {
      dispatch(actionCreators.jobs.delete(ownProps.job.url));
    }
  }
);


export default connect(null, mapDispatchToProps)(JobCard);
