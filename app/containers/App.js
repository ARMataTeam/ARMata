// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import SideMenu from '../components/SideMenu';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div>
        <SideMenu />
        {this.props.children}
      </div>
    );
  }
}
