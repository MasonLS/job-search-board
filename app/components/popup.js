//@flow

'use strict';

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import PopupToolBar from './popup-toolbar';

export default () => (
  <MuiThemeProvider>
    <Drawer open={ true } openSecondary={ true }>
      <PopupToolBar />
    </Drawer>
  </MuiThemeProvider>
);
