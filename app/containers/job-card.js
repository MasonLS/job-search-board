//@flow

'use strict';

import { connect } from 'react-redux';
import JobCard from '../components/job-board/job-card';
import { deleteJob } from '../actions';


const mapDispatchToProps = (dispatch, ownProps) => (
  {
    openLinkInNewTab: () => {
      chrome.tabs.create({url: ownProps.job.url});
    },
    deleteJob: () => {
      dispatch(deleteJob(ownProps.job.url));
    }
  }
);


export default connect(null, mapDispatchToProps)(JobCard);
