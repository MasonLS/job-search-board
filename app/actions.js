//@flow

'use strict';

const SYNC_STATE = 'SYNC_STORE';

export const syncState = (state: Object) => (
  {
    type: SYNC_STATE,
    state
  }
);

const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const toggleSidebar = () => (
  {
    type: TOGGLE_SIDEBAR
  }
);
