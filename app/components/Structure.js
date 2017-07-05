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

    constructor(props: any) {
        super(props);

        let json = JSON.parse(this.props.data.replace(/\s+/, ""));
        this.schema = json['$schema'];
        this.contentVersion = json['contentVersion'];
        this.parameters = json['parameters'];
        this.variables = json['variables'];
        this.resources = json['resources'];
        this.outputs = json['outputs'];

        console.log(this.schema);
    }

    render() {
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

    displayVariables(): Element<any>[] {
        let variables = [];
        for(let variable in this.variables) {
            variables.push(<li key={variable}>{variable}</li>);
        }

        return variables;
    }

    displayParameters(): Element<any>[] {
        let parameters = [];
        for(let parameter in this.parameters) {
            parameters.push(<li key={parameter}>{parameter}</li>);
        }

        return parameters;
    }

    displayOutputs(): Element<any>[] {
        let outputs = [];
        for(let output in this.outputs) {
            outputs.push(<li key={output}>{output}</li>);
        }

        return outputs;
    }
}