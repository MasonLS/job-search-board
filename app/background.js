//@flow
'use strict';

import { createStore } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import rootReducer from './reducers/root';

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
})
wrapStore(store, {portName: 'MY_APP'});
