//@flow
'use strict';

import { createStore } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import rootReducer from './reducers/root';

const store = createStore(rootReducer);
wrapStore(store, {portName: 'MY_APP'});


// chrome.runtime.onStartup.addListener(() => {

  // chrome.storage.sync.get('state', items => {
  //   if (items.store) {
  //     store.dispatch(syncState(items.state));
  //   }
  // });

// });

// chrome.runtime.onSuspend.addListener(() => {
//   chrome.storage.sync.set({ state: store.getState() });
// });

// const tabsWithSidebars = [];
//
// chrome.browserAction.onClicked.addListener(tab => {
//
//   chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
//       if (changeInfo.status === 'complete') {
//         _.pull(tabsWithSidebars, tabId);
//       }
//   });

//   if (!tabsWithSidebars.includes(tab.id)) {
//     tabsWithSidebars.push(tab.id);
//     chrome.tabs.executeScript(null, { file: './public/sidebar.js' }, () => {
//       chrome.tabs.sendMessage(tab.id, { message: 'toggle sidebar' });
//     });
//   } else {
//     chrome.tabs.sendMessage(tab.id, { message: 'toggle sidebar' });
//   }
//
// });

// chrome.runtime.onInstalled.addListener(details => {
//   console.log('previousVersion', details.previousVersion);
// });
//
// chrome.browserAction.setBadgeText({text: '\'Allo'});
//
// console.log('\'Allo \'Allo! Event Page for Browser Action');
