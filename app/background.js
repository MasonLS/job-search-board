//@flow
'use strict';

import { createStore } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import rootReducer from './reducers/root';
import actionCreators from './actions/creators';


let store;

//check if there is store saved in storage

chrome.storage.sync.get('state', items => {
  if (items.state) {
    store = createStore(rootReducer, items.state);
  } else {
    store = createStore(rootReducer);
  }

  wrapStore(store, {portName: 'MY_APP'});

  store.subscribe(() => {
    let state = store.getState();
    console.log(state);
    chrome.storage.sync.set({ state });
  });
});

//track of currently active tab
let currentTabId;

chrome.tabs.onActivated.addListener(activeInfo => {
  currentTabId = activeInfo.tabId;

  chrome.tabs.get(currentTabId, tab => {
    store.dispatch(actionCreators.setUrl(tab.url));
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (tabId === currentTabId && changeInfo.url) {
    store.dispatch(actionCreators.setUrl(changeInfo.url));
  }
});
