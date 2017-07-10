// @flow
import React, { Component } from 'react';
import Structure from './Structure';
import styles from './Home.css'; // eslint-disable-line flowtype-errors/show-errors

import Graph from 'react-graph-vis'

export default class Home extends Component {
  props: {
    data: string,
    selectedFilename: string
  }

  render() {
    var graph = {
      nodes: [
        { id: 1, label: 'Node 1' },
        { id: 2, label: 'Node 2' },
        { id: 3, label: 'Node 3' },
        { id: 4, label: 'Node 4' },
        { id: 5, label: 'Node 5' }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
    };

    var options = {
      layout: {
        hierarchical: true
      },
      edges: {
        color: "#FFFFFF"
      }
    };

    var events = {
      select: function (event) {
        var { nodes, edges } = event;
      }
    }

    if (this.props.selectedFilename === '') {
      return (
        <div>
          <div className={styles.container} data-tid="container">
            {this.props.selectedFilename === '' ? <h3>Load a template to start working on it!</h3> : this.props.selectedFilename}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Structure data={this.props.data} />
          <Graph graph={graph} options={options} events={events} />
        </div>
      </div>
    );
  }
}
