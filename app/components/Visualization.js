// @flow
import React, { Component } from 'react';
import Graph from 'react-graph-vis';
import styles from './Visualization.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Visualization extends Component {
  props: {
    json: Object
  }

  resources: any;

  findImage(resourceType: string) {
    switch (resourceType) {
      case 'Microsoft.Web/serverfarms':
        return '../resources/azure/Azure App Service_COLOR.png';
      case 'Microsoft.Web/sites':
        return '../resources/azure/Azure App Service - Web App_COLOR.png';
      case 'Microsoft.Insights/components':
        return '../resources/azure/Azure Application Insights_COLOR.png';
      case 'Microsoft.Storage/storageAccounts':
        return '../resources/azure/Azure Storage.png';
      case 'Microsoft.EventHub/namespaces':
        return '../resources/azure/Azure Event Hubs_COLOR.png';
      case 'Microsoft.Network/trafficManagerProfiles':
        return '../resources/azure/Azure Traffic Manager_COLOR.png';
      case 'Microsoft.Network/trafficManagerProfiles/azureEndpoints':
        return '../resources/azure/Azure Traffic Manager.png';
      case 'Microsoft.NotificationHubs/namespaces':
        return '../resources/azure/Azure Notification Hubs_COLOR.png';
      case 'Microsoft.Resources/deployments':
        return '../resources/azure/Unidentified feature object_COLOR.png';
      default:
        return '../resources/azure/Unidentified feature object_COLOR.png';
    }
  }

  render() {
    this.resources = this.props.json.resources;

    const resources = [];
    for (let i = 0; i < this.resources.length; i += 1) {
      resources.push({ id: i, label: this.resources[i].name, shape: 'image', image: this.findImage(this.resources[i].type) });
    }

    const graph = {
      nodes: resources,
      edges: []
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
        hierarchical: false
      },
      edges: {
        color: '#FFFFFF'
      },
      autoResize: true
    };

    return (<div className={styles.visualization}><Graph graph={graph} options={options} style={{ width: '100%', height: '100%' }} /></div>);
  }
}
