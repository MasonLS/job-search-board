//@flow

'use strict';

const SYNC_STATE = 'SYNC_STORE';

export const syncState = (state: Object) => (
  {
    type: SYNC_STATE,
    state
  }
);

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const toggleSidebar = () => (
  {
    type: TOGGLE_SIDEBAR
  }
);

const UPDATE_NEW_JOB = 'UPDATE_NEW_JOB';

export const updateNewJob = (updatedField: Object) => (
  {
    type: UPDATE_NEW_JOB,
    updatedField
  }
);

const ADD_NEW_JOB = 'ADD_NEW_JOB';

export const addNewJob = () => (
  {
    type: ADD_NEW_JOB
  }
);
