//@flow

'use strict';

import update from 'react-addons-update';

export default (
  state,
  { column, persist }
) => {
  if (persist && state.columns.length < 5) {
    return {
      ...state,
      columns: update(state.columns, {$push: [state.newColumn]}),
      newColumn: ''
    }
  }
  return {
    ...state,
    newColumn: column
  }
}
