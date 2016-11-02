//@flow

'use strict';

import { connect } from 'react-redux';
import Popup from '../components/popup/popup';
import { updateNewJob, addNewJob } from '../actions';


const mapDispatchToProps = (dispatch, ownProps) => (
  {
    handleCompanyChange: e => {
      dispatch(updateNewJob({company: e.target.value}));
    },
    handlePositionChange: e => {
      dispatch(updateNewJob({position: e.target.value}));
    },
    handleSubmit: newJob => {
      dispatch(addNewJob());
    }
  }
);

export default connect(null, mapDispatchToProps)(Popup);
