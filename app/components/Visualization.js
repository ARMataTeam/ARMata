// @flow
import React, { Component } from 'react';
import Graph from 'react-graph-vis';
import ImageGenerator from '../resources/imageGenerator';
import styles from './Visualization.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Visualization extends Component {
  props: {
    openNodeWindow: (Array<string>) => void, // eslint-disable-line react/no-unused-prop-types
    json: Object,
    hierarchicalLayout: boolean,
    physicsEnabled: boolean
  }

  resources: any;

  render() {
    const props = this.props;
    this.resources = this.props.json.resources;

    const resources = [];
    const dependencies = [];
    for (let i = 0; i < this.resources.length; i += 1) {
      const resource = this.resources[i];
      const id = `${resource.type}/${resource.displayName}`;

      const dependsOn = resource.dependsOn || [];
      for (let y = 0; y < dependsOn.length; y += 1) {
        dependencies.push({
          from: id,
          to: resource.dependsOn[y].name
        });
      }

      resources.push({
        id,
        label: resource.displayName,
        title: resource.displayName,
        shape: 'image',
        image: ImageGenerator.findImage(this.resources[i].type)
      });
    }

    const graph = {
      nodes: resources,
      edges: dependencies
    };

    const events = {
      select: (event) => {
        props.openNodeWindow(event.nodes);
      },
      showPopup: (params) => {
        console.log(params);
      }
    };

    const options = {
      nodes: {
        borderWidth: 4,
        size: 30,
        color: {
          border: '#222222',
          background: '#666666'
        },
        font: {
          color: '#fff'
        }
      },
      layout: {
        hierarchical: this.props.hierarchicalLayout
      },
      edges: {
        color: '#FFFFFF',
        smooth: {
          type: 'continuous'
        }
      },
      physics: {
        enabled: this.props.physicsEnabled,
        forceAtlas2Based: {
          centralGravity: 0.03,
          gravitationalConstant: -300
        },
        solver: 'forceAtlas2Based'
      },
      autoResize: true
    };

    return (<div className={styles.visualization}><Graph graph={graph} options={options} events={events} style={{ width: '100%', height: '100%' }} /></div>);
  }
}
