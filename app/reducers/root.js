//@flow

'use strict';

import NewJob, { addNewJob } from './new-job';

const initialState = {
  jobs: [],
  newJob: new NewJob()
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
        newJob: new NewJob(...state.newJob, ...action.updatedField)
      };
    case 'ADD_NEW_JOB':
      return addNewJob(state);
    default:
      return state;
  }
}
