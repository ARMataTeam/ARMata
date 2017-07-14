// @flow
import React, { Component } from 'react';
import Graph from 'react-graph-vis';
import styles from './Visualization.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Visualization extends Component {
  props: {
    json: Object,
    hierarchicalLayout: boolean
  }

  resources: any;

  static findImage(resourceType: string) {
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

  static normalizeResourceName(name: string) {
    if (name.startsWith('[') === false) {
      return name;
    }

    let normalizedName = name;
    normalizedName = normalizedName.replace('[', '');
    normalizedName = normalizedName.replace(']', '');
    return normalizedName;
  }

  static normalizeDependencyName(dependency: string) {
    let name = dependency;

    name = name.replace('[', '');
    name = name.replace(']', '');
    name = name.replace('resourceId(\'', '');
    name = name.replace('concat(\'', '');
    name = name.replace('\',', ',');
    name = name.replace('))', ')');
    name = name.replace(' ', '');
    name = name.replace(',', '/');

    return name;
  }

  static findResourceName(resource: Object) {
    let resourceName = resource.name;
    if (resource.tags && resource.tags.displayName) {
      resourceName = resource.tags.displayName;
    }

    return resourceName;
  }

  render() {
    this.resources = this.props.json.resources;

    const resources = [];
    const dependencies = [];
    for (let i = 0; i < this.resources.length; i += 1) {
      const resource = this.resources[i];
      const id = `${resource.type}/${Visualization.normalizeResourceName(resource.name)}`;

      const dependsOn = resource.dependsOn || [];
      for (let y = 0; y < dependsOn.length; y += 1) {
        dependencies.push({
          from: id,
          to: Visualization.normalizeDependencyName(resource.dependsOn[y])
        });
      }

      resources.push({
        id,
        label: Visualization.findResourceName(this.resources[i]),
        shape: 'image',
        image: Visualization.findImage(this.resources[i].type)
      });
    }

    const graph = {
      nodes: resources,
      edges: dependencies
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
        color: '#FFFFFF'
      },
      autoResize: true
    };

    return (<div className={styles.visualization}><Graph graph={graph} options={options} style={{ width: '100%', height: '100%' }} /></div>);
  }
}
