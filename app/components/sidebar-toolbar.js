//@flow

'use strict';

import React from 'react';
import styles from '../../styles/popup.css';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator } from 'material-ui/ToolBar';
import RaisedButton from 'material-ui/RaisedButton';

export default () => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={ 'Job Search Board' } />
      <RaisedButton label={ 'Job Board' } />
    </ToolbarGroup>
  </Toolbar>
);
