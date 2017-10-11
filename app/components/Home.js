// @flow
import React, { Component } from 'react';
import styles from './Home.css'; // eslint-disable-line flowtype-errors/show-errors
import Visualization from './Visualization';

export default class Home extends Component {
  props: {
    openNodeWindow: (nodes: Array<string>) => void,
    json: Object,
    selectedFilename: string,
    hierarchicalLayout: boolean,
    physicsEnabled: boolean
  }

  render() {
    if (this.props.selectedFilename === '') {
      return (
        <div className={styles.container} data-tid="container">
          {this.props.selectedFilename === '' ?
            <div>
              <h2>Load a template to start working on it!</h2>
              <h4 className={styles.subheader}>
                You can also use shortcut Ctrl + O to speed things up
                </h4>
            </div> :
            this.props.selectedFilename}
        </div>
      );
    }

    return (
      <div className={styles.container} data-tid="container">
        <Visualization
          json={this.props.json}
          hierarchicalLayout={this.props.hierarchicalLayout}
          openNodeWindow={(nodes: Array<string>) => this.props.openNodeWindow(nodes)}
          physicsEnabled={this.props.physicsEnabled}
        />
      </div>
    );
  }
}
