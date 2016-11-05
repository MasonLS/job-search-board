//@flow

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import JobBoard from './containers/job-board';

const store = new Store({
  portName: 'MY_APP'
});


ReactDOM.render(
  <Provider store={store}>
    <JobBoard />
  </Provider>,
  document.getElementById('root')
);
