//@flow

'use strict';

import React from 'react';

export default ({ job }) => (
  <div className="card horizontal">
    <div className="card-content">
      <span className="card-title">{job.company}</span>
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
    <div className="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
);
