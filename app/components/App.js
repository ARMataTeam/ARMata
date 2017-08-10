// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { ProgressInfo } from 'electron-builder-http';
import SideMenu from '../components/SideMenu';
import Alert from '../components/Alert';
import ProgressBar from '../components/Progress';
import StatusBar from '../components/StatusBar';

export default class App extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    changeView: () => void,
    children: Children,
    message: string,
    title: string,
    currentView: string,
    buttons: Object[],
    progressState: ProgressInfo,
    selectedFilename: string,
    lines: number,
    characters: number,
    loadedIn: number
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
        <ProgressBar progress={this.props.progressState} />
        <StatusBar
          selectedFilename={this.props.selectedFilename}
          lines={this.props.lines}
          characters={this.props.characters}
          loadedIn={this.props.loadedIn} />
        {this.props.children}
      </div>
    );
  }
}
