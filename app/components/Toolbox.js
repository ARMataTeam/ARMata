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
      { type: 'Microsoft.Web/serverfarms', name: 'App Service' },
      { type: 'Microsoft.Web/sites', name: 'Web App' },
      { type: 'Microsoft.Insights/components', name: 'Application Insights' },
      { type: 'Microsoft.Storage/storageAccounts', name: 'Storage Account' },
      { type: 'Microsoft.EventHub/namespaces', name: 'Event Hub' },
      { type: 'Microsoft.Network/trafficManagerProfiles', name: 'Traffic Manager' },
      { type: 'Microsoft.NotificationHubs/namespaces', name: 'Notification Hub' },
      { type: 'Microsoft.Network/networkInterfaces', name: 'Virtual Network' },
      { type: 'Microsoft.Compute/virtualMachines', name: 'Virtual Machine' },
      { type: 'Microsoft.Search/searchServices', name: 'Azure Search' },
      { type: 'Microsoft.Compute/virtualMachines', name: 'Virtual Machine' },
      { type: 'Microsoft.Network/applicationGateways', name: 'Application Gateway' },
      { type: 'Microsoft.ApiManagement/service', name: 'API Management' },
      { type: 'Microsoft.Backup/BackupVault', name: 'Azure Backup' }];

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
