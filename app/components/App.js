// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import SideMenu from '../components/SideMenu';
import Alert from '../components/Alert';

export default class App extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    changeView: () => void,
    children: Children,
    message: string,
    currentView: string,
    buttons: Object[]
  };

  render() {
    return (
      <div>
        <Alert
          message={this.props.message}
          dispatchButtonClick={this.props.dispatchButtonClick}
          buttons={this.props.buttons} />
        <SideMenu changeView={this.props.changeView} currentView={this.props.currentView} />
        {this.props.children}
      </div>
    );
  }
}
