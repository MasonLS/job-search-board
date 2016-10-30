//@flow

'use strict';

const initialState = {
}

export default (state: Object = initialState, action: Object) => {
  switch(action.type) {
    case 'SYNC_STATE':
      return {...state, ...action.state}
    default:
      return state;
  }
}
