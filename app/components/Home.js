// @flow
import React, { Component } from 'react';
import styles from './Home.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Home extends Component {
  props: {
    selectedFilename: string
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          {this.props.selectedFilename === '' ? <h2>Load a template to start working on it!</h2> : this.props.selectedFilename}
        </div>
      </div>
    );
  }
}
