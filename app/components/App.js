// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { Sidebar, Button, Form, Checkbox, Header, Icon } from 'semantic-ui-react';
import SideMenu from './SideMenu';
import Alert from './Alert';
import ProgressBar from './Progress';
import StatusBar from './StatusBar';
import RightSidebar from './RightSidebar';
import Toolbox from './Toolbox';
import CustomWindow from './Window';
import { Resource } from '../types/template';
import styles from './App.css'; // eslint-disable-line flowtype-errors/show-errors

export default class App extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    changeView: () => void,
    openSettings: () => void,
    openVisualization: () => void,
    openToolbox: () => void,
    toggleHierarchicalLayout: () => void,
    togglePhysics(): () => void,
    children: Children,
    resources: Array<Resource>,
    layout: Object,
    isSettingsWindowOpen: boolean,
    currentView: string,
    fileDialog: Object
  };

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Alert
          message={this.props.layout.message === '' ? this.props.fileDialog.message : this.props.layout.message}
          dispatchButtonClick={this.props.dispatchButtonClick}
          buttons={this.props.layout.buttons}
          title={this.props.layout.title === '' ? this.props.fileDialog.title : this.props.layout.title} />
        <SideMenu
          changeView={this.props.changeView}
          currentView={this.props.currentView}
          openSettings={this.props.openSettings}
          openVisualization={this.props.openVisualization}
          openToolbox={this.props.openToolbox} />
        <ProgressBar progress={this.props.layout.progress} />
        <CustomWindow
          activeWindow={this.props.layout.activeWindow}
          window={this.props.layout.window}
          dispatchButtonClick={this.props.dispatchButtonClick} />
        <StatusBar
          selectedFilename={this.props.fileDialog.selectedFilename}
          lines={this.props.fileDialog.fileData.lines}
          characters={this.props.fileDialog.fileData.characters}
          loadedIn={this.props.fileDialog.fileData.loadedIn} />
        <Sidebar.Pushable>
          <Sidebar as={Form} className={styles.sideBar} animation="scale down" width="wide" visible={this.props.isSettingsWindowOpen} icon="labeled" inverted>
            <Header as="h3" icon style={{ color: '#FFF' }}>
              <Icon name="settings" />
              Settings
    <Header.Subheader style={{ color: '#FFF' }}>
                Manage graph settings and set preferences.
    </Header.Subheader>
            </Header>
            <Form.Field><Button type="button" fluid onClick={() => this.props.dispatchButtonClick('CLOSE_SETTINGS')}>Close</Button></Form.Field>
          </Sidebar>
          <Toolbox dispatchButtonClick={(action) => this.props.dispatchButtonClick(action)} isToolboxOpen={this.props.layout.isToolboxOpen} />
          <RightSidebar
            dispatchButtonClick={(action) => this.props.dispatchButtonClick(action)}
            isNodeWindowOpen={this.props.layout.isNodeWindowOpen}
            nodes={this.props.layout.nodes}
            resources={this.props.resources} />
          <Sidebar.Pusher dimmed={this.props.isSettingsWindowOpen} style={{ height: '100%' }}>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Sidebar.Pushable>

        </Sidebar.Pushable>
      </div>
    );
  }
}
