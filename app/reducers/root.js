//@flow

'use strict';

import Job, { addNewJob } from './new-job';

const initialState = {
  jobs: [],
  newJob: new Job({url: '', company: '', position: ''})
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
    default:
      return state;
  }
}
