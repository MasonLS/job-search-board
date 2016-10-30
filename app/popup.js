
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Store } from 'react-chrome-redux';
import Popup from './components/popup';
//
// const store = new Store({
//   portName: 'MY_APP'
// });

const shouldRender = document.getElementById('root');

if (!shouldRender) {
  renderPopup();
} else {
  destroyPopup();
}

function renderPopup () {
  const root = document.createElement('div');
  root.id = 'root';

  ReactDOM.render(
    <Popup />,
    document.body.appendChild(root)
  );
}

function destroyPopup () {
  const root = document.getElementById('root');
  document.body.removeChild(root);
}
