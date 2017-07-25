import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import { ProgressInfo } from 'electron-updater';

export default class Progress extends Component {

  props: {
    progress: ProgressInfo
  }

  render() {
    return (
      <LinearProgress mode="determinate" value={this.props.progress.total} />
    );
  }
}
