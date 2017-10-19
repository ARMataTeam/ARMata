// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { Sidebar, Button, Form, Header, Icon, Grid, Image } from 'semantic-ui-react';
import ToolboxComponent from './ToolboxComponent';
import styles from './Toolbox.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Toolbox extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    addResource: (resourceType: string) => void,
    isToolboxOpen: boolean
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
        <Grid.Row columns={2}>
          <Grid.Column>
            <ToolboxComponent resourceType='Microsoft.Web/serverfarms' addResource={(type) => this.props.addResource(type)} />
            App Service
          </Grid.Column>
          <Grid.Column>
            <ToolboxComponent resourceType='Microsoft.Web/sites' addResource={(type) => this.props.addResource(type)} />
            Web App
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <ToolboxComponent resourceType='Microsoft.Insights/components' addResource={(type) => this.props.addResource(type)} />
            Application Insights
          </Grid.Column>
          <Grid.Column>
            <ToolboxComponent resourceType='Microsoft.Storage/storageAccounts' addResource={(type) => this.props.addResource(type)} />
            Storage Account
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <ToolboxComponent resourceType='Microsoft.EventHub/namespaces' addResource={(type) => this.props.addResource(type)} />
            Event Hub
          </Grid.Column>
          <Grid.Column>
            <ToolboxComponent resourceType='Microsoft.Network/trafficManagerProfiles' addResource={(type) => this.props.addResource(type)} />
            Traffic Manager
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <ToolboxComponent resourceType='Microsoft.NotificationHubs/namespaces' />
            Notification Hub
          </Grid.Column>
          <Grid.Column>
            <ToolboxComponent resourceType='Microsoft.Network/networkInterfaces' />
            Virtual Network
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
      <Form.Field><Button type="button" fluid onClick={() => this.props.dispatchButtonClick('CLOSE_TOOLBOX')}>Close</Button></Form.Field>
    </Sidebar>);
  }
}
