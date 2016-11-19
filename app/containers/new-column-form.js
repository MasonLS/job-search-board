//@flow

'use strict';

import { connect } from 'react-redux';
import actionCreators from '../actions/creators';
import NewColumnForm from '../components/job-board/new-column-form';


const mapDispatchToProps = dispatch => (
  {
    addColumn: column => {
      dispatch(actionCreators.columns.add(column));
    }
  }
);


export default connect(null, mapDispatchToProps)(NewColumnForm);
