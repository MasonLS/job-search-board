//@flow

'use strict';

export const addNewJob = state => {
  const jobs = state.jobs.slice();
  jobs.push(state.newJob);
  return {
    ...state,
    jobs,
    newJob: {
      url: '',
      company: '',
      position: '',
      column: 'backlog'
    }
  }
};
