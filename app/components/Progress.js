import React, { Component } from 'react';
import { ProgressInfo } from 'electron-updater';
import { Progress } from 'semantic-ui-react';
import styles from './Progress.css'; // eslint-disable-line flowtype-errors/show-errors

export default class ProgressBar extends Component {

  props: {
    progress: ProgressInfo
  }

  render() {
    return (
      <div className={styles.progress}><Progress percent={this.props.progress.total} /></div>
    );
  }
}
