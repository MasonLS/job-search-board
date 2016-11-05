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

export const updateNewJob = (field, value) => (
  {
    type: UPDATE_NEW_JOB,
    field,
    value
  }
);

const ADD_NEW_JOB = 'ADD_NEW_JOB';

export const addNewJob = () => (
  {
    type: ADD_NEW_JOB
  }
);

const UPDATE_JOB = 'UPDATE_JOB';

export const updateJob = (url, field, value) => (
  {
    type: UPDATE_JOB,
    url,
    field,
    value
  }
);

const DELETE_JOB = 'DELETE_JOB';

export const deleteJob = url => (
  {
    type: DELETE_JOB,
    url
  }
);

const OPEN_JOB_BOARD = 'OPEN_JOB_BOARD';

export const openJobBoard = () => (
  {
    type: OPEN_JOB_BOARD
  }
);

const NEW_COLUMN = 'NEW_COLUMN';

export const newColumn = (column, persist: Boolean) => (
  {
    type: NEW_COLUMN,
    column,
    persist
  }
);

const DELETE_COLUMN = 'DELETE_COLUMN';

export const deleteColumn = column => (
  {
    type: DELETE_COLUMN,
    column
  }
);
