//@flow

'use strict';

import actionTypes from '../actions/types';



const findJob = (jobs, url) => {
  return jobs.find(job => job.url === url);
}

const deleteAndReturnJob = (jobs, url) => {
  let indexOfJob;

  jobs.forEach((job, i) => {
    if (job.url === url) {
      indexOfJob = i;
    }
  });

  return jobs.splice(indexOfJob, 1)[0];
}

export default (jobs = [], action: Object) => {

  switch (action.type) {

    case actionTypes.jobs.ADD:
      jobs.push(action.job);
      return [
        ...jobs
      ];

    case actionTypes.jobs.UPDATE:
      const jobToUpdate = deleteAndReturnJob(jobs, action.url);
      const updatedJob = {
        ...jobToUpdate,
        ...action.info
      };
      return [
        ...jobs,
        updatedJob
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
