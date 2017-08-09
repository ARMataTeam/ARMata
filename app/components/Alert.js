// @flow
import React, { Component } from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import styles from './Alert.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Alert extends Component {
  props: {
    message: string,
    title: string,
    buttons: Object[],
    dispatchButtonClick: (action: string) => void
  };

  render() {
    return (<Confirm
      header={this.props.title}
      open={this.props.message !== ''}
      content={this.props.message}
      cancelButton={this.props.buttons.length > 0 ? this.props.buttons[0].label : ''}
      confirmButton={this.props.buttons.length > 1 ? this.props.buttons[1].label : ''}
      onCancel={() => this.props.dispatchButtonClick(this.props.buttons.length > 0 ? this.props.buttons[0].action : '')}
      onConfirm={() => this.props.dispatchButtonClick(this.props.buttons.length > 1 ? this.props.buttons[1].action : '')} />);
  }
}
