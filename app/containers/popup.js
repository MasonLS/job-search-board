//@flow

'use strict';

import { connect } from 'react-redux';
import Popup from '../components/popup/popup';
import { updateNewJob, addNewJob } from '../actions';

const mapStateToProps = state => (
  {
    newJob: state.newJob || {}
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleUpdate: (field, value) => {
      dispatch(updateNewJob(field, value));
    },
    handleSubmit: newJob => {
      dispatch(addNewJob());
    },
    openJobBoard: () => {
      chrome.tabs.create({
        url: './job-board.html'
      });
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
