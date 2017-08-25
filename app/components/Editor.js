// @flow
import React, { Component } from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';

import json from 'brace/mode/json';
import monokai from 'brace/theme/monokai';

export default class Editor extends Component {
  props: {
    json: string
  }

  render() {
    console.log(this.props.json);
    return <AceEditor
      height='100%'
      width='100%'
      mode='json'
      theme='monokai'
      name='UNIQUE_ID_OF_DIV'
      value={this.props.json}
      editorProps={{ $blockScrolling: true }}
      style={{ marginLeft: '70px' }}
    />;
  }
}
