// @flow
import { Template, Variable, Output, Resource, Parameter } from '../types/template';

export default class TemplateParser {

  json: Object;

  constructor(json: Object) {
    this.json = json;
  }

  parseTemplate(): Template {
    const parsedTemplate = {
      schema: this.json.$schema,
      contentVersion: this.json.contentVersion,
      outputs: this.getOutputs(this.json),
      parameters: this.getParameters(this.json),
      resources: this.getResources(this.json),
      variables: this.getVariables(this.json)
    };

    return parsedTemplate;
  }

  getVariables(json: Object): Array<Variable> {
    const variables = json.variables;
    const result = [];

    for (let variable in variables) {
      result.push({
        id: `variables('${variable}')`,
        name: variable,
        value: variables[variable]
      })
    }

    return result;
  }

  getParameters(json: Object): Array<Parameter> {
    const parameters = json.parameters;
    const result = [];

    for (let parameter in parameters) {
      result.push({
        id: `parameters('${parameter}')`,
        type: parameters[parameter].type,
        name: parameter,
        defaultValue: parameters[parameter].defaultValue
      });
    }

    return result;
  }

  getResources(json: Object): Array<Resource> {
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
        displayName: resource.name,
        type: resource.type,
        dependsOn
      });
    }

    return result;
  }

  getOutputs(json: Object): Array<Output> {
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

  normalizeNames(parsedTemplate: Template): void {
    for (var index = 0; index < parsedTemplate.resources.length; index += 1) {
      parsedTemplate.resources[index].displayName = this.parseResourceName(parsedTemplate.resources[index].name, parsedTemplate);
      parsedTemplate.resources[index].displayName = this.parseResourceName(parsedTemplate.resources[index].displayName, parsedTemplate);
    }
  }

  parseResourceName(name: string, parsedTemplate: Template): string {
    let normalizedName = name;

    const variablesRegex = /variables\('[a-zA-Z0-0-9-_]{0,}'\)/g;
    const variablesMatches = variablesRegex.exec(name);

    if (variablesMatches !== null) {
      for (let index = 0; index < variablesMatches.length; index += 1) {
        for (let variablesIndex = 0; variablesIndex < parsedTemplate.variables.length; variablesIndex += 1) {
          if (parsedTemplate.variables[variablesIndex].id === variablesMatches[index]) {
            normalizedName = normalizedName.replace(variablesMatches[index], parsedTemplate.variables[variablesIndex].value);
          }
        }
      }
    }

    const parametersRegex = /parameters\('[a-zA-Z0-0-9-_]{0,}'\)/g;
    const parametersMatches = parametersRegex.exec(normalizedName);

    if (parametersMatches !== null) {
      for (let index = 0; index < parametersMatches.length; index += 1) {
        for (let parametersIndex = 0; parametersIndex < parsedTemplate.parameters.length; parametersIndex += 1) {
          if (parsedTemplate.parameters[parametersIndex].id === parametersMatches[index]) {
            const nameToDisplay = parsedTemplate.parameters[parametersIndex].defaultValue || parsedTemplate.parameters[parametersIndex].name;
            normalizedName = normalizedName.replace(parametersMatches[index], nameToDisplay);
          }
        }
      }
    }

    const replaceRegex = /replace\([a-zA-Z0-9\-, ']{0,}\)/g;
    const replaceMatches = replaceRegex.exec(normalizedName);

    if (replaceMatches !== null) {
      for (let index = 0; index < replaceMatches.length; index += 1) {
        let replaceMatch = replaceMatches[index];

        replaceMatch = replaceMatch.replace('replace(', '');
        replaceMatch = replaceMatch.replace(')', '');

        const replaceArgs = replaceMatch.split(',');
        const evalReplace = (s, searchValue, replaceValue) => {
          return s.replace(searchValue, replaceValue);
        };
        const replaceValue = evalReplace(replaceArgs[0], replaceArgs[1], replaceArgs[2]);
        normalizedName = normalizedName.replace(replaceMatches[index], replaceValue);
      }
    }

    const concatRegex = /concat\([a-zA-Z0-9\-, '\[\]]{0,}\)/g;
    const concatMatches = concatRegex.exec(normalizedName);

    if (concatMatches !== null) {
      for (let index = 0; index < concatMatches.length; index += 1) {
        let concatMatch = concatMatches[index];

        concatMatch = concatMatch.replace('concat(', '');
        concatMatch = concatMatch.replace(')', '');
        concatMatch = concatMatch.replace(/\'/g, '');

        const concatArgs = concatMatch.split(',');
        const evalConcat = (values) => {
          let concated = '';
          for (let index = 0; index < values.length; index += 1) {
            concated = concated.concat(values[index]);
          }

          return concated;
        }
        const concatedValue = evalConcat(concatArgs);
        normalizedName = normalizedName.replace(concatMatches[index], concatedValue);
      }
    }

    // Remove whitespaces just for the sake or normalizing names
    normalizedName = normalizedName.replace(/\s+/g, '');

    // Removed [[ and ]] which have left now
    normalizedName = normalizedName.replace(/\[/g, '');
    normalizedName = normalizedName.replace(/\]/g, '');

    return normalizedName;
  }
}
