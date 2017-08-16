// @flow

export type Template = {
  schema: string,
  contentVersion: string,
  outputs: Array<Output>,
  parameters: Array<Parameter>,
  resources: Array<Resource>,
  variables: Array<Variable>,
  lines: number,
  characters: number,
  loadedIn: number
};

export type Output = {
  type: string,
  name: string,
  value: string
};

export type Parameter = {
  id: string,
  type: string,
  name: string,
  defaultValue?: any
};

export type Resource = {
  id: string,
  name: string,
  displayName: string,
  dependsOn: Array<DependsOn>,
  type: string
};

export type DependsOn = {
  id: string,
  name: string
};

export type Variable = {
  id: string,
  name: string,
  value: string
};
