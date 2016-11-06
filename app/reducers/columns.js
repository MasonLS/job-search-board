//@flow

'use strict';

import actionTypes from '../actions/types';

export default (columns = [], action: Object) => {

  switch(action.type) {

    case actionTypes.columns.ADD:
      columns.push(action.column);
      return [
        ...columns
      ];

    case actionTypes.columns.DELETE:
      const indexOfColumn = columns.indexOf(action.column);
      columns.splice(indexOfColumn, 1);
      return [
        ...columns
      ];

    default:
      return columns;
  }
};
