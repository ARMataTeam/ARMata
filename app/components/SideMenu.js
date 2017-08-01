// @flow
import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import { grey100, grey500, grey50 } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import styles from './SideMenu.css'; // eslint-disable-line flowtype-errors/show-errors

export default class SideMenu extends Component {
  props: {
    changeView: (view: string) => void,
    currentView: string
  }

  render() {
    return (
      <div className={styles.sideMenu}>
        <List>
          <ListItem className={styles.menuItemIcon} onTouchTap={() => this.props.changeView('Structure')}>
            <Link to="/"><ContentPaste color={this.props.currentView === 'Structure' ? grey50 : grey500} hoverColor={grey100} /></Link>
          </ListItem>
        </List>
      </div>);
  }
}
