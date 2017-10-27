// @flow
import { Template, Variable, Output, Resource, Parameter } from '../types/template';

const stripJsonComments = require('strip-json-comments');

export default class TemplateParser {

  json: Object;
  lines: number;
  characters: number;
  startTime: Date

  constructor(jsonData: string) {
    const rawData = stripJsonComments(TemplateParser.removeBOM(jsonData));
    const json = JSON.parse(rawData);

    this.lines = rawData.split('\n').length;
    this.characters = rawData.length;
    this.json = json;
    this.startTime = new Date();
  }

  static removeBOM(data: string) {
    let clearedData = data;
    if (clearedData !== null && clearedData.charCodeAt(0) === 0xFEFF) {
      clearedData = clearedData.slice(1);
    }

    return clearedData;
  }

  parseTemplate(): Template {
    const parsedTemplate = {
      schema: this.json.$schema || '',
      contentVersion: this.json.contentVersion,
      outputs: this.getOutputs(),
      parameters: this.getParameters(),
      resources: this.getResources(),
      variables: this.getVariables(),
      lines: this.lines,
      characters: this.characters,
      loadedIn: (new Date().getMilliseconds() - this.startTime.getMilliseconds())
    };

    return parsedTemplate;
  }

  getVariables(): Array<Variable> {
    const variables = this.json.variables;
    const result = [];

    if (variables) {
      Object.keys(variables).forEach((variable) => {
        result.push({
          id: `variables('${variable}')`,
          name: variable,
          value: variables[variable]
        });
      });
    }

    return result;
  }

  getParameters(): Array<Parameter> {
    const parameters = this.json.parameters;
    const result = [];

    if (parameters) {
      Object.keys(parameters).forEach((parameter) => {
        result.push({
          id: `parameters('${parameter}')`,
          type: parameters[parameter].type,
          name: parameter,
          defaultValue: parameters[parameter].defaultValue
        });
      });
    }

    return result;
  }

  getResources(): Array<Resource> {
    const resources = TemplateParser.convertResourceTreeToList(this.json);
    const result = [];

    if (resources) {
      for (let index = 0; index < resources.length; index += 1) {
        const resource = resources[index];
        const dependsOn = [];

        if (resource.dependsOn) {
          for (let dependsOnIndex = 0;
            dependsOnIndex < resource.dependsOn.length;
            dependsOnIndex += 1) {
            dependsOn.push({
              id: resource.dependsOn[dependsOnIndex],
              name: resource.dependsOn[dependsOnIndex]
            });
          }
        }

        result.push({
          id: resource.name,
          name: resource.name,
          displayName: resource.name,
          type: resource.type,
          dependsOn
        });
      }
    }

    return result;
  }

  static convertResourceTreeToList(root: object): Array<object> {
    const stack = [];
    const array = [];
    stack.push(root);

    while (stack.length !== 0) {
      const node = stack.pop();
      if (node.resources !== null && node.resources !== undefined) {
        for (let i = node.resources.length - 1; i >= 0; i -= 1) {
          stack.push(node.resources[i]);
          array.push(node.resources[i]);
        }
      }
    }
    return array;
  }

  getOutputs(): Array<Output> {
    const outputs = this.json.outputs;
    const result = [];

    if (outputs) {
      Object.keys(outputs).forEach((output) => {
        result.push({
          type: outputs[output].type,
          name: output,
          value: outputs[output].value
        });
      });
    }

    return result;
  }

  static normalizeNames(parsedTemplate: Template): void {
    for (let index = 0; index < parsedTemplate.resources.length; index += 1) {
      const resource = parsedTemplate.resources[index];
      const parsedName = TemplateParser.parseResourceName(resource.name, parsedTemplate);

      resource.id = `${resource.type}${parsedName}`;
      resource.displayName = parsedName;

      for (let dependencyIndex = 0;
        dependencyIndex < resource.dependsOn.length;
        dependencyIndex += 1) {
        resource.dependsOn[dependencyIndex].name =
          TemplateParser.parseResourceName(
            resource.dependsOn[dependencyIndex].name,
            parsedTemplate);
      }
    }
  }

  static parseResourceName(name: string, parsedTemplate: Template): string {
    let normalizedName = name;

    normalizedName = TemplateParser.parseVariables(normalizedName, parsedTemplate);
    normalizedName = TemplateParser.parseParameters(normalizedName, parsedTemplate);
    normalizedName = TemplateParser.parseResourceId(normalizedName);
    normalizedName = TemplateParser.parseReplace(normalizedName);
    normalizedName = TemplateParser.parseConcat(normalizedName);

    // Remove whitespaces just for the sake of normalizing names
    normalizedName = normalizedName.replace(/\s+/g, '');

    // Removed [[ and ]] which have left now
    normalizedName = normalizedName.replace(/\[/g, '');
    normalizedName = normalizedName.replace(/\]/g, '');

    return normalizedName;
  }

  static parseVariables(name: string, parsedTemplate: Template): string {
    let normalizedName = name;
    const matches = normalizedName.match(/variables/g);
    if (typeof matches !== 'undefined' && matches !== null) {
      for (let matchIndex = 0; matchIndex < matches.length; matchIndex += 1) {
        const variablesRegex = /variables\([a-zA-Z0-9-_']{0,}\)/g;
        const variablesMatches = variablesRegex.exec(normalizedName);

        if (variablesMatches !== null) {
          for (let index = 0; index < variablesMatches.length; index += 1) {
            for (let variablesIndex = 0;
              variablesIndex < parsedTemplate.variables.length;
              variablesIndex += 1) {
              // Remember that by default string comparison is case-sensitive
              if (parsedTemplate.variables[variablesIndex].id.toUpperCase()
                === variablesMatches[index].toUpperCase()) {
                normalizedName = normalizedName.replace(variablesMatches[index],
                  parsedTemplate.variables[variablesIndex].value);
              }
            }
          }
        }
      }
    }

    return normalizedName;
  }

  static parseParameters(name: string, parsedTemplate: Template): string {
    let normalizedName = name;
    const matches = normalizedName.match(/parameters/g);
    if (typeof matches !== 'undefined' && matches !== null) {
      for (let matchIndex = 0; matchIndex < matches.length; matchIndex += 1) {
        const parametersRegex = /parameters\(['a-zA-Z0-0-9\-_]{0,}\)/g;
        const parametersMatches = parametersRegex.exec(normalizedName);

        if (parametersMatches !== null) {
          for (let index = 0; index < parametersMatches.length; index += 1) {
            for (let parametersIndex = 0;
              parametersIndex < parsedTemplate.parameters.length;
              parametersIndex += 1) {
              if (parsedTemplate.parameters[parametersIndex].id === parametersMatches[index]) {
                const nameToDisplay =
                  parsedTemplate.parameters[parametersIndex].defaultValue ||
                  parsedTemplate.parameters[parametersIndex].name;
                normalizedName = normalizedName.replace(parametersMatches[index], nameToDisplay);
              }
            }
          }
        }
      }
    }

    return normalizedName;
  }

  static parseResourceId(name: string): string {
    let normalizedName = name;
    // TODO: Instead of replacing 'resourceId' to 'concat' it should
    // extract logic responsible for concatening and call it here by
    // adding '/' to the end of the string
    const resourceIdRegex = /resourceId\(['a-zA-Z0-9-._, ()/[\]]{0,}\)/g;
    const resourceIdMatches = resourceIdRegex.exec(normalizedName);

    if (resourceIdMatches !== null) {
      for (let index = 0; index < resourceIdMatches.length; index += 1) {
        normalizedName = normalizedName.replace('resourceId', 'concat');
      }
    }

    return normalizedName;
  }

  static parseReplace(name: string): string {
    let normalizedName = name;
    const replaceRegex = /replace\([a-zA-Z0-9\-, ']{0,}\)/g;
    const replaceMatches = replaceRegex.exec(normalizedName);

    if (replaceMatches !== null) {
      for (let index = 0; index < replaceMatches.length; index += 1) {
        let replaceMatch = replaceMatches[index];

        replaceMatch = replaceMatch.replace('replace(', '');
        replaceMatch = replaceMatch.replace(')', '');

        const replaceArgs = replaceMatch.split(',');
        const evalReplace = (s, searchValue, replaceValue) => s.replace(searchValue, replaceValue);
        const replaceValue = evalReplace(replaceArgs[0], replaceArgs[1], replaceArgs[2]);
        normalizedName = normalizedName.replace(replaceMatches[index], replaceValue);
      }
    }

    return normalizedName;
  }

  static parseConcat(name: string): string {
    let normalizedName = name;
    const matches = normalizedName.match(/concat/g);
    if (typeof matches !== 'undefined' && matches !== null) {
      for (let matchIndex = 0; matchIndex < matches.length; matchIndex += 1) {
        const concatRegex = /concat\([a-zA-Z0-9\-_,./ '[\]()]{0,}\)/g;
        const concatMatches = concatRegex.exec(normalizedName);

        if (concatMatches !== null) {
          for (let index = 0; index < concatMatches.length; index += 1) {
            let concatMatch = concatMatches[index];

            concatMatch = concatMatch.replace('concat(', '');
            concatMatch = concatMatch.replace(')', '');
            concatMatch = concatMatch.replace(/'/g, '');

            const concatArgs = concatMatch.split(',');
            const evalConcat = (values) => {
              let concated = '';
              for (let concatIndex = 0; concatIndex < values.length; concatIndex += 1) {
                concated = concated.concat(values[concatIndex]);
              }

              return concated;
            };
            const concatedValue = evalConcat(concatArgs);
            normalizedName = normalizedName.replace(concatMatches[index], concatedValue);
          }
        }
      }
    }

    return normalizedName;
  }
}
