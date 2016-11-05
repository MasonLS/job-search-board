//@flow

'use strict';

import { connect } from 'react-redux';
import JobBoard from '../components/job-board/job-board';

const mapStateToProps = state => (
  {
    columns: state.columns || []
  }
);


export default connect(mapStateToProps)(JobBoard);
