// @flow
import React, { Component, Element } from 'react';
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
      variables.push(<li key={k}>{k}</li>);
    });

    return variables;
  }

  displayParameters(): Element<any>[] {
    const parameters = [];
    Object.keys(this.parameters).forEach((p) => {
      parameters.push(<li key={p}>{p}</li>);
    });

    return parameters;
  }

  displayOutputs(): Element<any>[] {
    const outputs = [];
    Object.keys(this.outputs).forEach((o) => {
      outputs.push(<li key={o}>{o}</li>);
    });

    return outputs;
  }

  parseJson(): void {
    const json = JSON.parse(this.props.data.replace(/\s+/, ''));
    this.schema = json.$schema;
    this.contentVersion = json.contentVersion;
    this.parameters = json.parameters;
    this.variables = json.variables;
    this.resources = json.resources;
    this.outputs = json.outputs;
  }

  render() {
    this.parseJson();

    return (
      <div className={styles.structure}>
        <h4>Structure</h4>
        <h5>Schema:</h5>
        {this.schema}
        <h5>Content Version:</h5>
        {this.contentVersion}
        <h5>Variables:</h5>
        <ul>{this.displayVariables()}</ul>
        <h5>Parameters:</h5>
        <ul>{this.displayParameters()}</ul>
        <h5>Outputs:</h5>
        <ul>{this.displayOutputs()}</ul>
      </div>);
  }
}
