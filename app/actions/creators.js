//@flow

'use strict';

import actionTypes from './types';

export default {

  setUrl: (url: String) => (
    {
      type: actionTypes.SET_URL,
      url
    }
  ),

  jobs: {

    add: (job: Object) => (
      {
        type: actionTypes.jobs.ADD,
        job
      }
    ),

    update: (url: String, info: Object) => (
      {
        type: actionTypes.jobs.UPDATE,
        url,
        info
      }
    ),

    delete: (url: String) => (
      {
        type: actionTypes.jobs.DELETE,
        url
      }
    )
  },

  columns: {

    add: (column: String) => (
      {
        type: actionTypes.columns.ADD,
        column
      }
    ),

    delete: (column: String) => (
      {
        type: actionTypes.columns.DELETE,
        column
      }
    )
  }
};
