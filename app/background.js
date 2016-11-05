//@flow
'use strict';

import { createStore } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import rootReducer from './reducers/root';


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
    chrome.storage.sync.set({ state })
  });
});

//keep track of current tab and it's url
//to attach to job when new one is created
let currentTabUrl;
let currentTabId;

chrome.tabs.onActivated.addListener(activeInfo => {
  currentTabId = activeInfo.tabId;

  chrome.tabs.get(currentTabId, tab => {
    currentTabUrl = tab.url;
    console.log(currentTabUrl);
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (tabId === currentTabId && changeInfo.url) {
    currentTabUrl = changeInfo.url;
    console.log(currentTabUrl);
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'url please') {
    sendResponse({url: currentTabUrl});
  }
});
