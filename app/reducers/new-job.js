//@flow

'use strict';

export default class Job {

  constructor({ url, company, position }) {
    this.url = url;
    this.company = company;
    this.position = position;
  }

}

export const addNewJob = state => {
  const jobs = state.jobs.slice();
  jobs.push(state.newJob);
  return {
    ...state,
    jobs,
    newJob: new Job({url: '', company: '', position: ''})
  }
};
