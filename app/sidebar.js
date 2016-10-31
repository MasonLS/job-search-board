
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'react-chrome-redux';
import Sidebar from './components/sidebar';

const store = new Store({
  portName: 'MY_APP'
});

let open = false;

chrome.runtime.onMessage.addListener( (request) => {
  if (request.message === 'toggle sidebar') {
    open = !open;
    if (open) renderSidebar();
    else destroySidebar();
  }
});

function renderSidebar () {
  const root = document.createElement('div');
  root.id = 'root';

  ReactDOM.render(
    <Sidebar />,
    document.body.appendChild(root)
  );
}

function destroySidebar () {
  const root = document.getElementById('root');
  document.body.removeChild(root);
}
