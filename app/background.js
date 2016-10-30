//@flow
'use strict';

import { createStore } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import rootReducer from './reducers/root';
import { syncState } from './actions';


const store = createStore(rootReducer);

wrapStore(store, {portName: 'MY_APP'});

chrome.runtime.onStartup.addListener(() => {

  chrome.storage.sync.get('state', items => {
    if (items.store) {
      store.dispatch(syncState(items.state));
    }
  });

});

chrome.runtime.onSuspend.addListener(() => {
  chrome.storage.sync.set({ state: store.getState() });
});

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript(null, {file: './public/popup.js'});
});

// chrome.runtime.onInstalled.addListener(details => {
//   console.log('previousVersion', details.previousVersion);
// });
//
// chrome.browserAction.setBadgeText({text: '\'Allo'});
//
// console.log('\'Allo \'Allo! Event Page for Browser Action');
