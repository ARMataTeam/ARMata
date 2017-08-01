// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { ProgressInfo } from 'electron-builder-http';
import SideMenu from '../components/SideMenu';
import Alert from '../components/Alert';
import Progress from '../components/Progress';

export default class App extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    changeView: () => void,
    children: Children,
    message: string,
    title: string,
    currentView: string,
    buttons: Object[],
    progressState: ProgressInfo
  };

  render() {
    return (
      <div>
        <Alert
          message={this.props.message}
          dispatchButtonClick={this.props.dispatchButtonClick}
          buttons={this.props.buttons}
          title={this.props.title} />
        <SideMenu changeView={this.props.changeView} currentView={this.props.currentView} />
        <Progress progress={this.props.progressState} />
        {this.props.children}
      </div>
    );
  }
}
