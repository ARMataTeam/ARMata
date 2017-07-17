// @flow
import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import styles from './JsonPreview.css'; // eslint-disable-line flowtype-errors/show-errors

export default class JsonPreview extends Component {
  props: {
    template: Object
  }

  render() {
    if (this.props.template) {
      return (
        <div className={styles.jsonView}>
          <ReactJson src={this.props.template} collapsed={2} />
        </div>);
    }

    return <div />;
  }
}
