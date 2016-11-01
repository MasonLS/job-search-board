//@flow

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import rootReducer from './reducers/root';
import { syncState } from './actions';

const store = createStore(rootReducer);

chrome.storage.sync.get('state', items => {
  if (items.store) {
    store.dispatch(syncState(items.state));
  }
});
