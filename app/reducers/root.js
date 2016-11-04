//@flow

'use strict';

import { addNewJob } from './new-job';
import newColumn from './new-column';
import update from 'react-addons-update';

const initialState = {
  jobs: [],
  newJob: {url: '', company: '', position: '', column: 'backlog'},
  columns: ['backlog'],
  newColumn: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SYNC_STATE':
      return {
        ...state,
        ...action.state
      };
    case 'UPDATE_NEW_JOB':
      return {
        ...state,
        newJob: {
          ...state.newJob,
          ...action.updatedField
        }
      };
    case 'ADD_NEW_JOB':
      return addNewJob(state);
    case 'NEW_COLUMN':
      return newColumn(state, action);
    case 'DELETE_COLUMN':
      let columnIndex = state.columns.indexOf(action.columnName);
      return {
        ...state,
        columns: update(state.columns, {$splice: [[columnIndex, 1]]})
      }
    default:
      return state;
  }
}
