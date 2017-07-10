// @flow
import React, { Component } from 'react';

import Graph from 'react-graph-vis'

export default class Visualization extends Component {
  props: {
    json: Object
  }

  resources: any;

  render() {
    this.resources = this.props.json.resources;

    let nodes = [];
    for (var i = 0; i < this.resources.length; i++) {
      nodes.push({ id: i, label: this.resources[i].name });
    }

    var graph = {
      nodes: nodes,
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
    };

    var options = {
      layout: {
        hierarchical: false
      },
      edges: {
        color: "#FFFFFF"
      },
      autoResize: true
    };

    var events = {
      select: function (event) {
        var { nodes, edges } = event;
      }
    }

    return <Graph graph={graph} options={options} events={events} style={{ width: '100%', height: '100%' }} />;
  }
}
