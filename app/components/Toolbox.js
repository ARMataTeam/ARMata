// @flow
import React, { Component } from 'react';
import { Sidebar, Button, Form, Header, Icon, Grid } from 'semantic-ui-react';
import ToolboxComponent from './ToolboxComponent';
import styles from './Toolbox.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Toolbox extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    addResource: (resourceType: string) => void,
    isToolboxOpen: boolean
  }

  generateGrid() {
    const types = [
      { type: 'Microsoft.AnalysisServices/servers', name: 'Analysis Services' },
      { type: 'Microsoft.ApiManagement/service', name: 'API Management' },
      { type: 'Microsoft.Authorization/locks', name: 'Authorization Lock' },
      { type: 'Microsoft.Automation/automationAccounts', name: 'Automation Account' },
      { type: 'Microsoft.Batch/batchAccounts', name: 'Batch Account' },
      { type: 'Microsoft.Cache/Redis', name: 'Redis Cache' },
      { type: 'Microsoft.Cdn/profiles', name: 'CDN' },
      { type: 'Microsoft.CertificateRegistration/certificateOrders', name: 'Certificate Registration' },
      { type: 'Microsoft.CognitiveServices/accounts', name: 'Cognitive Services' },
      { type: 'Microsoft.Compute/virtualMachines', name: 'Virtual Machine' },
      { type: 'Microsoft.ContainerInstance/containerGroups', name: 'Container Groups' },
      { type: 'Microsoft.ContainerRegistry/registries', name: 'Container Registry' },
      { type: 'Microsoft.ContainerService/containerServices', name: 'Container Services' },
      { type: 'Microsoft.DocumentDB/databaseAccounts', name: 'Document DB' },
      { type: 'Microsoft.CustomerInsights/hubs', name: 'Customer Insights' },
      { type: 'Microsoft.DataFactory/dataFactories', name: 'Data Factory' },
      { type: 'Microsoft.DataLakeAnalytics/accounts', name: 'Data Lake Analytics' },
      { type: 'Microsoft.DataLakeStore/accounts', name: 'Data Lake Store' },
      { type: 'Microsoft.Devices/IotHubs', name: 'IoT Hub' },
      { type: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups', name: 'IoT Hub Consumer Groups' },
      { type: 'Microsoft.DevTestLab/labs', name: 'DevTest Labs' },
      { type: 'Microsoft.DomainRegistration/domains', name: 'Domain Registration' },
      { type: 'Microsoft.EventHub/namespaces', name: 'Event Hub Namespace' },
      { type: 'Microsoft.HDInsight/clusters', name: 'HDInsight cluster' },
      { type: 'Microsoft.ImportExport/jobs', name: 'Import/Export' },
      { type: 'Microsoft.Insights/Components', name: 'Insights' },
      { type: 'Microsoft.KeyVault/vaults', name: 'Key Vault' },
      { type: 'Microsoft.Logic/integrationAccounts', name: 'Logic App' },
      { type: 'Microsoft.MachineLearning/commitmentPlans', name: 'Machine Learning Plan' },
      { type: 'Microsoft.Media/mediaservices', name: 'Media Services' },
      { type: 'Microsoft.Network/applicationGateways', name: 'Application Gateway' },
      { type: 'Microsoft.Network/connections', name: 'Network Connections' },
      { type: 'Microsoft.Network/loadBalancers', name: 'Load Balancer' },
      { type: 'Microsoft.Network/networkInterfaces', name: 'Network Interface' },
      { type: 'Microsoft.Network/virtualNetworks', name: 'Virtual Networks' },
      { type: 'Microsoft.NotificationHubs/namespaces', name: 'Notification Hub' },
      { type: 'Microsoft.StreamAnalytics/streamingjobs', name: 'Stream Analytics' },
      { type: 'Microsoft.StorSimple/managers', name: 'StorSimple' },
      { type: 'Microsoft.Storage/storageAccounts', name: 'Storage Account' },
      { type: 'Microsoft.Sql/servers', name: 'SQL Server' },
      { type: 'Microsoft.ServiceFabric/clusters', name: 'Service Fabric Cluster' },
      { type: 'Microsoft.ServiceBus/namespaces', name: 'Service Bus Namespace' },
      { type: 'Microsoft.ServerManagement/gateways', name: 'Server Management' },
      { type: 'Microsoft.Search/searchServices', name: 'Search Service' },
      { type: 'Microsoft.Scheduler/jobCollections', name: 'Scheduler' },
      { type: 'Microsoft.Relay/namespaces', name: 'Relay' },
      { type: 'Microsoft.Resources/deployments', name: 'Resources' },
      { type: 'Microsoft.RecoveryServices/vaults', name: 'Recovery Services' },
      { type: 'Microsoft.PowerBI/workspaceCollections', name: 'Power BI' },
      { type: 'Microsoft.Web/sites', name: 'App Service' },
    ];

    // Sort data so toolbox is more intuitive
    types.sort((a, b) => a.name.localeCompare(b.name));

    const grid = [];
    for (let i = 0; i <= types.length - 1; i += 2) {
      grid.push(<Grid.Row columns={2} key={i}>
        <Grid.Column>
          <ToolboxComponent
            resourceType={types[i].type}
            addResource={(type) => this.props.addResource(type)}
          />
          {types[i].name}
        </Grid.Column>
        <Grid.Column>
          <ToolboxComponent
            resourceType={types[i + 1].type}
            addResource={(type) => this.props.addResource(type)}
          />
          {types[i + 1].name}
        </Grid.Column>
      </Grid.Row>);
    }

    return grid;
  }

  render() {
    return (<Sidebar as={Form} className={styles.toolbox} animation="overlay" width="wide" visible={this.props.isToolboxOpen} icon="labeled" inverted>
      <Header as="h3" icon style={{ color: '#FFF' }}>
        <Icon name="sitemap" />
        Toolbox
<Header.Subheader style={{ color: '#FFF' }}>
          Build & customize a template
</Header.Subheader>
      </Header>
      <Grid>
        {this.generateGrid()}
      </Grid>
      <br />
      <Form.Field><Button type="button" fluid onClick={() => this.props.dispatchButtonClick('CLOSE_TOOLBOX')}>Close</Button></Form.Field>
    </Sidebar>);
  }
}
