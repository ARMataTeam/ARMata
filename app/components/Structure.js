// @flow
import React, { Component, Element } from 'react';
import { List, Checkbox } from 'semantic-ui-react';
import { Template } from '../types/template';
import styles from './Structure.css'; // eslint-disable-line flowtype-errors/show-errors

export default class Structure extends Component {
  props: {
    json: Template,
    hierarchicalLayout: boolean,
    toggleHierarchicalLayout: () => void
  }

  displayVariables(): Element<Object>[] {
    const variables = [];

    for (let index = 0; index < this.props.json.variables.length; index += 1) {
      const variable = this.props.json.variables[index];
      variables.push(<List.Item
        key={variable.id}>{variable.name}
      </List.Item>);
    }

    return variables;
  }

  displayParameters(): Element<Object>[] {
    const parameters = [];

    for (let index = 0; index < this.props.json.parameters.length; index += 1) {
      const parameter = this.props.json.parameters[index];
      parameters.push(<List.Item
        key={parameter.id}>{parameter.name}
      </List.Item>);
    }

    return parameters;
  }

  displayOutputs(): Element<Object>[] {
    const outputs = [];

    for (let index = 0; index < this.props.json.outputs.length; index += 1) {
      const output = this.props.json.outputs[index];
      outputs.push(<List.Item
        key={output.name}>{output.name}
      </List.Item>);
    }

    return outputs;
  }

  render() {
    return (
      <div>
        <List>
          Structure
          <List.Item className={styles.structureHeader} primaryText="Schema" initiallyOpen={false} nestedItems={[<List.Item className={styles.structureItem} key={1} primaryText={this.props.json.schema} />]} />
          <List.Item className={styles.structureHeader} primaryText="Content Version" initiallyOpen={false} nestedItems={[<List.Item className={styles.structureItem} key={1} primaryText={this.props.json.contentVersion} />]} />
          <List.Item className={styles.structureHeader} primaryText="Variables" initiallyOpen={false} nestedItems={this.displayVariables()} />
          <List.Item className={styles.structureHeader} primaryText="Parameters" initiallyOpen={false} nestedItems={this.displayParameters()} />
          <List.Item className={styles.structureHeader} primaryText="Outputs" initiallyOpen={false} nestedItems={this.displayOutputs()} />
        </List>
        <Checkbox toggle label="Hierarchical layout?" onChange={() => this.props.toggleHierarchicalLayout()} checked={this.props.hierarchicalLayout} />
      </div>);
  }
}
