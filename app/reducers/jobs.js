//@flow

'use strict';

import actionTypes from '../actions/types';



const findJob = (jobs, url) => {
  return jobs.find(job => job.url === url);
}

const deleteJob = (jobs, url) => {
  let indexOfJob;

  jobs.forEach((job, i) => {
    if (job.url === url) {
      indexOfJob = i;
    }
  });

  jobs.splice(indexOfJob, 1);
}

export default (jobs = [], action: Object) => {

  switch (action.type) {

    case actionTypes.jobs.ADD:
      jobs.push(action.job);
      return [
        ...jobs
      ];

    case actionTypes.jobs.UPDATE:
      const jobToUpdate = findJob(jobs, action.url);
      const updatedJob = {
        ...jobToUpdate,
        ...action.info
      };
      return [
        ...jobs
      ];

    case actionTypes.jobs.DELETE:
      deleteJob(jobs, action.url);
      return [
        ...jobs
      ];

    default:
      return jobs;
  }
}
