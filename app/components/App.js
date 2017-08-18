// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { ProgressInfo } from 'electron-builder-http';
import { Sidebar, Button, Form, Checkbox, Header, Icon } from 'semantic-ui-react';
import SideMenu from './SideMenu';
import Alert from './Alert';
import ProgressBar from './Progress';
import StatusBar from './StatusBar';
import RightSidebar from './RightSidebar';
import Window from './Window';
import { Resource } from '../types/template';
import styles from './App.css'; // eslint-disable-line flowtype-errors/show-errors

export default class App extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    changeView: () => void,
    openSettings: () => void,
    toggleHierarchicalLayout: () => void,
    children: Children,
    message: string,
    title: string,
    currentView: string,
    buttons: Object[],
    progressState: ProgressInfo,
    selectedFilename: string,
    lines: number,
    characters: number,
    loadedIn: number,
    isSettingsWindowOpen: boolean,
    isNodeWindowOpen: boolean,
    nodes: Array<string>,
    resources: Array<Resource>,
    activeWindow: string
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Alert
          message={this.props.message}
          dispatchButtonClick={this.props.dispatchButtonClick}
          buttons={this.props.buttons}
          title={this.props.title} />
        <SideMenu
          changeView={this.props.changeView}
          currentView={this.props.currentView}
          openSettings={this.props.openSettings} />
        <ProgressBar progress={this.props.progressState} />
        <Window activeWindow={this.props.activeWindow} />
        <StatusBar
          selectedFilename={this.props.selectedFilename}
          lines={this.props.lines}
          characters={this.props.characters}
          loadedIn={this.props.loadedIn} />
        <Sidebar.Pushable>
          <Sidebar as={Form} className={styles.sideBar} animation="scale down" width="wide" visible={this.props.isSettingsWindowOpen} icon="labeled" inverted>
            <Header as="h3" icon style={{ color: '#FFF' }}>
              <Icon name="settings" />
              Settings
    <Header.Subheader style={{ color: '#FFF' }}>
                Manage graph settings and set preferences.
    </Header.Subheader>
            </Header>
            <Form.Field><Checkbox toggle label="Hierarchical layout?" onChange={() => this.props.toggleHierarchicalLayout()} /></Form.Field>
            <Form.Field><Button type="button" fluid onClick={() => this.props.dispatchButtonClick('CLOSE_SETTINGS')}>Close</Button></Form.Field>
          </Sidebar>
          <RightSidebar
            dispatchButtonClick={(action) => this.props.dispatchButtonClick(action)}
            isNodeWindowOpen={this.props.isNodeWindowOpen}
            nodes={this.props.nodes}
            resources={this.props.resources} />
          <Sidebar.Pusher dimmed={this.props.isSettingsWindowOpen} style={{ height: '100%' }}>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
