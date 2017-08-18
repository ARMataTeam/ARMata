// @flow
import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

export default class Window extends Component {
  props: {
    activeWindow: string
  };

  render() {
    return (<Modal open={this.props.activeWindow !== ''} closeOnDimmerClick={true} closeOnDocumentClick={true}>
      <Modal.Header>About ARMata</Modal.Header>
      <Modal.Content>This is some content</Modal.Content>
    </Modal>);
  }
}
