// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import SideMenu from '../components/SideMenu';
import Alert from '../components/Alert';

export default class App extends Component {
  props: {
    clearErrors: () => void,
    changeView: () => void,
    children: Children,
    message: string,
    isError: boolean,
    currentView: string
  };

  render() {
    return (
      <div>
        <Alert
          message={this.props.message}
          isError={this.props.isError}
          clearErrors={this.props.clearErrors} />
        <SideMenu changeView={this.props.changeView} currentView={this.props.currentView} />
        {this.props.children}
      </div>
    );
  }
}
