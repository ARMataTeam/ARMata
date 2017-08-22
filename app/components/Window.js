// @flow
import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import Window from '../types/window';
import AboutWindow from './AboutWindow';

const windows = {
  AboutWindow
};

export default class CustomWindow extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    activeWindow: string,
    window: Window
  };

  renderWindow() {
    if (this.props.window.content) {
      return React.createElement(windows[this.props.window.content], null);
    }

    return <div />;
  }

  render() {
    return (<Modal open={this.props.activeWindow !== ''} onClose={() => this.props.dispatchButtonClick('CLOSE_WINDOW')} closeIcon="close">
      <Modal.Content>{this.renderWindow()}</Modal.Content>
    </Modal>);
  }
}
