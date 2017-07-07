// @flow
import React, { Component, Element } from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import styles from './Structure.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Structure extends Component {
  props: {
    data: string
  }

  schema: string;
  contentVersion: string;
  parameters: any;
  variables: any;
  resources: any;
  outputs: any;

  displayVariables(): Element<any>[] {
    const variables = [];
    Object.keys(this.variables).forEach((k) => {
      variables.push(<ListItem key={k}>{k}</ListItem>);
    });

    return variables;
  }

  displayParameters(): Element<any>[] {
    const parameters = [];
    Object.keys(this.parameters).forEach((p) => {
      parameters.push(<ListItem key={p}>{p}</ListItem>);
    });

    return parameters;
  }

  displayOutputs(): Element<any>[] {
    const outputs = [];
    Object.keys(this.outputs).forEach((o) => {
      outputs.push(<ListItem key={o}>{o}</ListItem>);
    });

    return outputs;
  }

  parseJson(): void {
    const json = JSON.parse(this.props.data.replace(/\s+/, ''));
    this.schema = json.$schema;
    this.contentVersion = json.contentVersion;
    this.parameters = json.parameters || {};
    this.variables = json.variables || {};
    this.resources = json.resources;
    this.outputs = json.outputs || {};
  }

  render() {
    this.parseJson();

    return (
      <div className={styles.structure}>
        <List>
          <Subheader>Structure</Subheader>
          <Subheader>Schema</Subheader>
          <ListItem>
            {this.schema}
          </ListItem>
          <Subheader>Content Version</Subheader>
          <ListItem>
            {this.contentVersion}
          </ListItem>
          <Subheader>Variables</Subheader>
          {this.displayVariables()}
          <Subheader>Parameters</Subheader>
          {this.displayParameters()}
          <Subheader>Outputs</Subheader>
          {this.displayOutputs()}
        </List>
      </div>);
  }
}
