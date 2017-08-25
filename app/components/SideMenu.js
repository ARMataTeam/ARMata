// @flow
import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './SideMenu.css'; // eslint-disable-line flowtype-errors/show-errors

export default class SideMenu extends Component {
  props: {
    openSettings: () => void,
    currentView: string
  }

  render() {
    return (
      <Menu fixed="left" icon inverted vertical className={styles.sideMenu}>
        <Menu.Item active={this.props.currentView === '/'}>
          <Link to="/"><Icon name="cloud" size="big" /></Link>
        </Menu.Item>
        <Menu.Item active={this.props.currentView === '/editor'}>
          <Link to="/editor"><Icon name="write" size="big" /></Link>
        </Menu.Item>
        <Menu.Item onClick={() => this.props.openSettings()} active={this.props.currentView === 'Settings'} className={styles.settings}>
          <Icon name="settings" size="big" />
        </Menu.Item>
      </Menu>);
  }
}
