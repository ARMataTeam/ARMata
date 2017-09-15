// @flow
import React, { Component } from 'react';
import { Confirm } from 'semantic-ui-react';

export default class Alert extends Component {
  props: {
    message: string,
    title: string,
    buttons: Object[],
    dispatchButtonClick: (action: string) => void
  };

  render() {
    if (this.props.buttons.length === 0) {
      this.props.buttons.push({ label: 'Close', action: 'CLEAR_ERRORS' });
    }

    return (<Confirm
      key={this.props.title}
      header={this.props.title}
      open={this.props.message !== ''}
      content={this.props.message}
      cancelButton={this.props.buttons.length > 0 ? this.props.buttons[0].label : ''}
      confirmButton={this.props.buttons.length > 1 ? this.props.buttons[1].label : null}
      onCancel={() => this.props.dispatchButtonClick(this.props.buttons.length > 0 ? this.props.buttons[0].action : '')}
      onConfirm={() => this.props.dispatchButtonClick(this.props.buttons.length > 1 ? this.props.buttons[1].action : '')} />);
  }
}
