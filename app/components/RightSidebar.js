// @flow
import React, { Component } from 'react';
import { Sidebar, Button, Form, Header, Icon, List } from 'semantic-ui-react';
import { Resource } from '../types/template';
import styles from './RightSidebar.css'; // eslint-disable-line flowtype-errors/show-errors

export default class RightSidebar extends Component {
  props: {
    dispatchButtonClick: (action: string) => void,
    deleteResource: (id: string) => void,
    isNodeWindowOpen: boolean,
    nodes: Array<string>,
    resources: Array<Resource>
  }

  static displayDependencies(resource: Resource) {
    const items = [];

    for (let index = 0; index < resource.dependsOn.length; index += 1) {
      items.push(<List.Item key={index}>{resource.dependsOn[index].id}</List.Item>);
    }

    if (items.length === 0) {
      items.push(<List.Item key={0}>None</List.Item>);
    }

    return items;
  }

  findResource(): Resource {
    for (let index = 0; index < this.props.resources.length; index += 1) {
      if (this.props.resources[index].id === this.props.nodes[0]) {
        return this.props.resources[index];
      }
    }
  }

  render() {
    const resource = this.findResource() || {};

    return (
      <Sidebar direction="right" as={Form} className={styles.sideBarRight} animation="scale down" width="wide" visible={this.props.isNodeWindowOpen} icon="labeled" inverted>
        <Header as="h3" icon style={{ color: '#FFF' }}>
          <Icon name="share alternate" />
          Selected resource
    <Header.Subheader style={{ color: '#FFF' }}>
            Resource detailed information
    </Header.Subheader>
        </Header>
        <List>
          <List.Item>
            <List.Header>Identifier</List.Header>
            {resource.id}
          </List.Item>
          <List.Item>
            <List.Header>Original name</List.Header>
            {resource.name}
          </List.Item>
          <List.Item>
            <List.Header>Type</List.Header>
            {resource.type}
          </List.Item>
          <List.Item>
            <List.Header>Dependencies</List.Header>
            {typeof (resource.id) !== 'undefined' ? RightSidebar.displayDependencies(resource) : <List.Item>None</List.Item>}
          </List.Item>
        </List>
        <Form.Field>
          <Button.Group className={styles.buttons}>
            <Button type="button" fluid onClick={() => this.props.dispatchButtonClick('CLOSE_NODE_WINDOW')}>Close</Button>
            <Button type="button" negative fluid onClick={() => this.props.deleteResource(resource.id)}>Delete</Button>
          </Button.Group>
        </Form.Field>
      </Sidebar>
    );
  }
}
