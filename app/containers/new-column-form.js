//@flow

'use strict';

import { connect } from 'react-redux';
import { newColumn } from '../actions';
import NewColumnForm from '../components/job-board/new-column-form';


const mapStateToProps = state => (
  {
    newColumn: state.newColumn || ''
  }
);


const mapDispatchToProps = dispatch => (
  {
    updateNewColumn: (e) => {
      dispatch(newColumn(e.target.value, false));
    },
    addColumn: columnName => {
      dispatch(newColumn(null, true));
    }
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(NewColumnForm);
