//@flow

'use strict';

import { addNewJob } from './new-job';
import newColumn from './new-column';
import update from 'react-addons-update';

const initialState = {
  jobs: [],
  newJob: {url: '', company: '', position: '', interest: '', notes: '', column: 'backlog'},
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
      if (action.field) {
        state.newJob[action.field] = action.value;
      }
      return {
        ...state,
      };
    case 'ADD_NEW_JOB':
      return addNewJob(state);
    case 'RESET_NEW_JOB':
      return {
        ...state,
        newJob: {url: '', company: '', position: '', interest: '', notes: '', column: 'backlog'}
      }
    case 'UPDATE_JOB':
      let { url, field, value } = action;
      let jobToUpdate = state.jobs.find(job => job.url === url);
      if (field) {
        jobToUpdate[field] = value;
        return {
          ...state
        };
      } else return state;
    case 'DELETE_JOB':
      let jobIndex = state.jobs.find(job => job.url === action.url);
      return {
        ...state,
        jobs: update(state.jobs, {$splice: [[jobIndex, 1]]})
      };
    case 'NEW_COLUMN':
      return newColumn(state, action);
    case 'DELETE_COLUMN':
      state.jobs.forEach(job => job.column = 'backlog');
      let columnIndex = state.columns.indexOf(action.column);
      return {
        ...state,
        columns: update(state.columns, {$splice: [[columnIndex, 1]]})
      }
    default:
      return state;
  }
}
