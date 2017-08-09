// @flow
import React, { Component } from 'react';
import Structure from './Structure';
import styles from './Home.css'; // eslint-disable-line flowtype-errors/show-errors
import Visualization from './Visualization';

export default class Home extends Component {
  props: {
    json: Object,
    selectedFilename: string,
    hierarchicalLayout: boolean,
    toggleHierarchicalLayout: () => void
  }

  render() {
    if (this.props.selectedFilename === '') {
      return (
        <div>
          <div className={styles.container} data-tid="container">
            {this.props.selectedFilename === '' ?
              <div>
                <h2>Load a template to start working on it!</h2>
                <h4 className={styles.subheader}>You can also use shortcut Ctrl + O to speed things up</h4>
              </div> :
              this.props.selectedFilename}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Visualization
            json={this.props.json}
            hierarchicalLayout={this.props.hierarchicalLayout}
          />
        </div>
      </div>
    );
  }
}
