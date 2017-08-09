// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, List } from 'semantic-ui-react';
import styles from './SideMenu.css'; // eslint-disable-line flowtype-errors/show-errors

export default class SideMenu extends Component {
  props: {
    changeView: (view: string) => void,
    currentView: string
  }

  render() {
    return (
      <div className={styles.sideMenu}>
        <List selection verticalAlign='middle'>
          <Icon name='home' size='big' />
        </List>
      </div>);
  }
}
