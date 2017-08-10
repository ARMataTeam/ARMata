// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import styles from './SideMenu.css'; // eslint-disable-line flowtype-errors/show-errors

export default class SideMenu extends Component {
  props: {
    changeView: (view: string) => void,
    currentView: string
  }

  render() {
    return (
      <Menu fixed='left' icon inverted vertical className={styles.sideMenu}>
        <Menu.Item onClick={() => ''}>
          <Icon name='cloud' size='big' />
        </Menu.Item>
      </Menu>);
  }
}
