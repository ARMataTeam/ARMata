// @flow
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import styles from './Alert.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Alert extends Component {
  props: {
    errorMessage: string,
    isError: boolean,
    clearErrors: () => void
  };

  render() {
    const actions =
      [
        <FlatButton label="Got it!" onTouchTap={this.props.clearErrors} />
      ];

    return (<Dialog
      actions={actions}
      modal={false}
      open={this.props.isError === true}
      onRequestClose={this.props.clearErrors}
      bodyClassName={styles.alert}
      contentClassName={styles.alert}>
      {this.props.errorMessage}</Dialog>);
  }
}
