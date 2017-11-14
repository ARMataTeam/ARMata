// @flow
import React, { Component } from 'react';
import styles from './StatusBar.css'; // eslint-disable-line flowtype-errors/show-errors

export default class StatusBar extends Component {
  props: {
    selectedFilename: string,
    lines: number,
    characters: number,
    loadedIn: number,
    isEdited: boolean,
    isSaved: boolean
  }

  determineStatus(): string {
    if(this.props.isSaved) {
      return styles.statusBarSaved;
    }

    if(this.props.isEdited) {
      return styles.statusBarEdited;
    }

    return styles.statusBar;
  }

  render() {
    return (
      <div className={this.determineStatus()}>
        <div className={styles.filenamePart}>
          {this.props.selectedFilename ? this.props.selectedFilename : 'Template not loaded'}
          {this.props.isEdited ? ' (EDITED)' : ''}
        </div>
        <div className={styles.informationPart}>
          Lines: {this.props.lines} |
          Characters: {this.props.characters} |
          Loaded in ~{this.props.loadedIn}ms
        </div>
      </div>);
  }
}
