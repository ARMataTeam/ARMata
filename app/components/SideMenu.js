// @flow
import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import { grey100, grey300 } from 'material-ui/styles/colors';
import styles from './SideMenu.css'; // eslint-disable-line flowtype-errors/show-errors

export default class SideMenu extends Component {
  render() {
    return (
      <div className={styles.sideMenu}>
        <List>
          <ListItem className={styles.menuItemIcon}>
            <ContentPaste color={grey300} hoverColor={grey100} />
          </ListItem>
        </List>
      </div>);
  }
}
