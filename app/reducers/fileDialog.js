// @flow
import { OPEN_FILE } from '../actions/fileDialog';
import { Template, Variable, Output, Resource, Parameter } from '../types/template';

const stripJsonComments = require('strip-json-comments');

type actionType = {
  type: string
};

type fileDialogStateType = {
  selectedFilename: string,
  fileData: Template
};

const initialState = {
  selectedFilename: '',
  fileData: {
    schema: '',
    contentVersion: '',
    variables: [],
    outputs: [],
    resources: [],
    parameters: []
  }
};

export default function fileDialog(state: fileDialogStateType = initialState, action: actionType) {
  switch (action.type) {
    case OPEN_FILE: {
      const rawData = stripJsonComments(removeBOM(action.data));
      const json = JSON.parse(rawData);

      const parsedTemplate = {
        schema: json.$schema,
        contentVersion: json.contentVersion,
        outputs: getOutputs(json),
        parameters: getParameters(json),
        resources: getResources(json),
        variables: getVariables(json)
      };

      return Object.assign({}, state, {
        selectedFilename: action.selectedFilename,
        fileData: json,
        hierarchicalLayout: false
      });
    }
    default: {
      return state;
    }
  }
}

function removeBOM(data: string) {
  let clearedData = data;
  if (clearedData.charCodeAt(0) === 0xFEFF) {
    clearedData = clearedData.slice(1);
  }

  return clearedData;
}

function getVariables(json: Object): Array<Variable> {
  const variables = json.variables;
  const result = [];

  for (let variable in variables) {
    result.push({
      name: variable,
      value: variables[variable]
    })
  }

  return result;
}

function getParameters(json: Object): Array<Parameter> {
  const parameters = json.parameters;
  const result = [];

  for (let parameter in parameters) {
    result.push({
      type: parameters[parameter].type,
      name: parameter,
      defaultValue: parameters[parameter].defaultValue
    });
  }

  return result;
}

function getResources(json: Object): Array<Resource> {
  const resources = json.resources;
  const result = [];

  for (let index = 0; index < resources.length; index += 1) {
    const resource = resources[index];
    const dependsOn = [];

    if (resource.dependsOn) {
      for (let dependsOnIndex = 0; dependsOnIndex < resource.dependsOn.length; dependsOnIndex += 1) {
        dependsOn.push({
          name: resource.dependsOn[dependsOnIndex]
        });
      }
    }

    result.push({
      name: resource.name,
      type: resource.type,
      dependsOn
    });
  }

  return result;
}

function getOutputs(json: Object): Array<Output> {
  const outputs = json.outputs;
  const result = [];

  for (let output in outputs) {
    result.push({
      type: outputs[output].type,
      name: output,
      value: outputs[output].value
    });
  }

  return result;
}
