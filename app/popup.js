//@flow

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import Popup from './containers/popup';
import { updateNewJob } from './actions';

const store = new Store({
  portName: 'MY_APP'
});

//politely request active tab's url from background.js and store it

chrome.runtime.sendMessage({message: 'url please'}, response => {
  store.dispatch(updateNewJob({url: response.url}));
});

ReactDOM.render(
  <Provider store={store}>
    <Popup />
  </Provider>,
  document.getElementById('root')
);
