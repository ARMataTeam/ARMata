// @flow
import React, { Component, Element } from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import { Template, Variable, Output, Resource, Parameter } from '../types/template';
import styles from './Structure.css'; // eslint-disable-line flowtype-errors/show-errors

const inlineStyles = {
  element: {
    marginLeft: '10px',
    width: '95% !important'
  },
  label: {
    fontSize: '11px',
    width: 'auto !important'
  }
};

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
      variables.push(<ListItem className={styles.structureItem} key={variable.id}>{variable.name}</ListItem>);
    }

    return variables;
  }

  displayParameters(): Element<Object>[] {
    const parameters = [];

    for (let index = 0; index < this.props.json.parameters.length; index += 1) {
      const parameter = this.props.json.parameters[index];
      parameters.push(<ListItem className={styles.structureItem} key={parameter.id}>{parameter.name}</ListItem>);
    }

    return parameters;
  }

  displayOutputs(): Element<Object>[] {
    const outputs = [];

    for (let index = 0; index < this.props.json.outputs.length; index += 1) {
      const output = this.props.json.outputs[index];
      outputs.push(<ListItem className={styles.structureItem} key={output.name}>{output.name}</ListItem>);
    }

    return outputs;
  }

  render() {
    return (
      <div className={styles.structure}>
        <List>
          <Subheader>Structure</Subheader>
          <ListItem className={styles.structureHeader} primaryText="Schema" initiallyOpen={false} nestedItems={[<ListItem className={styles.structureItem} key={1} primaryText={this.props.json.schema} />]} />
          <ListItem className={styles.structureHeader} primaryText="Content Version" initiallyOpen={false} nestedItems={[<ListItem className={styles.structureItem} key={1} primaryText={this.props.json.contentVersion} />]} />
          <ListItem className={styles.structureHeader} primaryText="Variables" initiallyOpen={false} nestedItems={this.displayVariables()} />
          <ListItem className={styles.structureHeader} primaryText="Parameters" initiallyOpen={false} nestedItems={this.displayParameters()} />
          <ListItem className={styles.structureHeader} primaryText="Outputs" initiallyOpen={false} nestedItems={this.displayOutputs()} />
        </List>
        <Toggle label="Hierarchical layout?" labelStyle={inlineStyles.label} style={inlineStyles.element} toggled={this.props.hierarchicalLayout} onToggle={this.props.toggleHierarchicalLayout} />
      </div>);
  }
}
