// @flow
import React, { Component } from 'react';
import { Icon, Menu, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './SideMenu.css'; // eslint-disable-line flowtype-errors/show-errors

export default class SideMenu extends Component {
  props: {
    openSettings: () => void,
    openVisualization: () => void,
    openToolbox: () => void,
    currentView: string,
    openQuickTemplate: () => void
  }

  render() {
    return (
      <Menu fixed="left" icon inverted vertical className={styles.sideMenu}>
        <Popup
          trigger={<Menu.Item active={this.props.currentView === '/'} onClick={() => this.props.openVisualization()}>
            <Link to="/"><Icon name="cloud" size="big" /></Link>
          </Menu.Item>}
          content="Visualization"
          position="right center"
          size="mini"
          />
        <Popup
          trigger={<Menu.Item onClick={() => this.props.openToolbox()}>
            <Link to="/"><Icon name="sitemap" size="big" /></Link>
          </Menu.Item>}
          content="Toolbox"
          position="right center"
          size="mini"
          />

        <Popup
          trigger={<Menu.Item onClick={() => this.props.openQuickTemplate()}>
            <Link to="/quicktemplate"><Icon name="key" size="big" /></Link> </Menu.Item>}
          content="QuickTemplate"
          position="right center"
          size="mini" />

        <Popup
          trigger={<Menu.Item active={this.props.currentView === '/editor'}>
            <Link to="/editor"><Icon name="code" size="big" /></Link>
          </Menu.Item>}
          content="Editor"
          position="right center"
          size="mini"
          />
        <Menu.Item onClick={() => this.props.openSettings()} active={this.props.currentView === 'Settings'} className={styles.settings}>
          <Icon name="settings" size="big" />
        </Menu.Item>
      </Menu>);
  }
}
