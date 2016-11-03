//@flow

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import Popup from './containers/popup';

import { createStore } from 'redux';
import rootReducer from './reducers/root';

// const store = new Store({
//   portName: 'MY_APP'
// });

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Popup />
  </Provider>,
  document.getElementById('root')
);
