//@flow

'use strict';

import { connect } from 'react-redux';
import Popup from '../components/popup/popup';
import actionCreators from '../actions/creators';

const mapStateToProps = state => (
  {
    url: state.url
  }
);

const mapDispatchToProps = dispatch => (
  {
    addJob: (job: Object, url: String) => {
      job.url = url;
      dispatch(actionCreators.jobs.add(job));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
