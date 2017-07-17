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
    errorMessage: string,
    isError: boolean
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Alert
          errorMessage={this.props.errorMessage}
          isError={this.props.isError}
          clearErrors={this.props.clearErrors} />
        <SideMenu changeView={this.props.changeView} />
        {this.props.children}
      </div>
    );
  }
}
