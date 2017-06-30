// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
  
export default class Home extends Component {
  props: {
    selectedFilename: string
  }

  render() {
    const { selectedFilename } = this.props;

    return (
     <div>
        <div className={styles.container} data-tid="container">
          <div>
            <h2>Load a template to start working on it!</h2>
          </div>
          <div><h4>{selectedFilename}</h4></div>
        </div>
      </div>
    );
  }
}
