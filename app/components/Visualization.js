// @flow
import React, { Component } from 'react';
import Graph from 'react-graph-vis';

export default class Visualization extends Component {
  props: {
    json: Object
  }

  resources: any;

  render() {
    this.resources = this.props.json.resources;

    const resources = [];
    for (let i = 0; i < this.resources.length; i += 1) {
      resources.push({ id: i, label: this.resources[i].name });
    }

    const graph = {
      nodes: resources,
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
    };

    const options = {
      layout: {
        hierarchical: false
      },
      edges: {
        color: '#FFFFFF'
      },
      autoResize: true
    };

    return <Graph graph={graph} options={options} style={{ width: '100%', height: '100%' }} />;
  }
}
