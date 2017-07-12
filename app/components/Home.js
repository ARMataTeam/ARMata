// @flow
import React, { Component } from 'react';
import Structure from './Structure';
import styles from './Home.css'; // eslint-disable-line flowtype-errors/show-errors
import Visualization from './Visualization';

const stripJsonComments = require('strip-json-comments');

export default class Home extends Component {
  props: {
    data: string,
    selectedFilename: string
  }

  static removeBOM(data: string) {
    let clearedData = data;
    if (clearedData.charCodeAt(0) === 0xFEFF) {
      clearedData = clearedData.slice(1);
    }

    return clearedData;
  }

  render() {
    if (this.props.selectedFilename === '') {
      return (
        <div>
          <div className={styles.container} data-tid="container">
            {this.props.selectedFilename === '' ? <h3>Load a template to start working on it!</h3> : this.props.selectedFilename}
          </div>
        </div>
      );
    }

    const json = JSON.parse(stripJsonComments(Home.removeBOM(this.props.data)));

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Structure json={json} />
          <Visualization json={json} />
        </div>
      </div>
    );
  }
}
