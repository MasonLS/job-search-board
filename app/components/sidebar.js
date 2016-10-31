//@flow

'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import SidebarToolbar from './sidebar-toolbar';

export default () => (
  <MuiThemeProvider>
    <Drawer open={ true } openSecondary={ true }>
      <SidebarToolbar />
    </Drawer>
  </MuiThemeProvider>
);
