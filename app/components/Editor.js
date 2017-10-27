// @flow
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace'; // eslint-disable-line no-unused-vars

import json from 'brace/mode/json'; // eslint-disable-line no-unused-vars
import monokai from 'brace/theme/monokai'; // eslint-disable-line no-unused-vars

export default class Editor extends Component {
  props: {
    setNewTemplate: (template: string) => void,
    json: string
  }

  onChange(newValue: string) {
    this.props.setNewTemplate(newValue);
  }

  render() {
    return (<AceEditor
      height="100%"
      width="100%"
      mode="json"
      theme="monokai"
      name="UNIQUE_ID_OF_DIV"
      value={this.props.json}
      editorProps={{ $blockScrolling: true }}
      style={{ marginLeft: '70px' }}
      onChange={this.onChange.bind(this)}
      />);
  }
}
