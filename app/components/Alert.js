// @flow
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import styles from './Alert.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Alert extends Component {
  props: {
    message: string,
    buttons: Object[],
    dispatchButtonClick: (action: string) => void
  };

  render() {
    const actions = [];
    for (let i = 0; i < this.props.buttons.length; i += 1) {
      const button = this.props.buttons[i];
      actions.push(
        <FlatButton
          label={button.label}
          onTouchTap={() => this.props.dispatchButtonClick(button.action)}
          />
      );
    }

    return (<Dialog
      actions={actions}
      modal={false}
      open={this.props.message !== ''}
      onRequestClose={() => this.props.dispatchButtonClick('CLEAR_ERRORS')}
      bodyClassName={styles.alert}
      contentClassName={styles.alert}>
      {this.props.message}</Dialog>);
  }
}
