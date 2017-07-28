// @flow

export type Template = {
  schema: string,
  contentVersion: string,
  outputs: Array<Output>,
  parameters: Array<Parameter>,
  resources: Array<Resource>,
  variables: Array<Variable>
};

export type Output = {
  type: string,
  name: string,
  value: string
};

export type Parameter = {
  type: string,
  name: string,
  defaultValue?: any
};

export type Resource = {
  name: string,
  dependsOn: Array<DependsOn>,
  type: string
};

export type DependsOn = {
  name: string
};

export type Variable = {
  name: string,
  value: string
};
