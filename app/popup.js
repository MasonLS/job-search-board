//@flow

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import Popup from './containers/popup';

const store = new Store({
  portName: 'MY_APP'
});

ReactDOM.render(
  <Provider store={store}>
    <Popup />
  </Provider>,
  document.getElementById('root')
);
