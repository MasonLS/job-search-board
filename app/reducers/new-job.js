//@flow

'use strict';

export default ({ url = '', company = '', position = '' }) => {
  this.url = url,
  this.company = company,
  this.position = position
};

export const addNewJob = (state) => {
  const jobs = state.jobs.slice();
  jobs.push(state.newJob);
  return {
    ...state,
    jobs,
    newJob: new NewJob()
  }
};
