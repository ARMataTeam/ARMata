// @flow
import React, { Component } from 'react';
import styles from './StatusBar.css'; // eslint-disable-line flowtype-errors/show-errors

export default class StatusBar extends Component {
  props: {
    selectedFilename: string,
    lines: number,
    characters: number,
    loadedIn: number,
    isEdited: boolean
  }

  render() {
    return (
      <div className={this.props.isEdited ? styles.statusBarEdited : styles.statusBar}>
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
