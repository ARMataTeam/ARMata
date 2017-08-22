// @flow
import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

const appVersion = require('electron').remote.app.getVersion();

export default class AboutWindow extends Component {
  render() {
    return (
      <Header as="h2" icon textAlign="center">
        <Icon name="info" /> ARMata
    <Header.Subheader>
          ARM templates vizualizer and editor<br />
          Version: {appVersion}</Header.Subheader>
      </Header>);
  }
}
