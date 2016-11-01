//@flow

'use strict';

import React, { Component } from 'react';
import styles from '../../../styles/popup.css';


export default class Popup extends Component {
  constructor () {
    super();
    this.state = {
      job: {}
    };
  }
  render () {
    return (
      <div className={styles.root}>
         <div className="container">
          <div className={'row ' + styles.row}>
            <div className="input-field col s6">
              <i className="material-icons prefix">domain</i>
              <input className="validate" type="text" tabIndex="-1"/>
              <label>Company</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">person_outline</i>
              <input className="validate" type="text" tabIndex="-1" />
              <label>Position</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
