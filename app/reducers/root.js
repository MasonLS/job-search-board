//@flow

'use strict';

import jobs from './jobs';
import columns from './columns';
import { combineReducers } from 'redux';
import actionTypes from '../actions/types';

const url = (url = '', action: Object) => {
  if (action.type === actionTypes.SET_URL) {
    return action.url;
  }
  return url;
}

export default combineReducers(
  {
    jobs,
    columns,
    url
  }
);
