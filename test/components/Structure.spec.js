import React from 'react';
import { shallow } from 'enzyme';
import Structure from '../../app/components/Structure';

function setupMissingVariables() {
  const actions = {
  };
  const component = shallow(<Structure data={'{"$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#","contentVersion": "","parameters": {}, "resources":[], "outputs": {}}'} {...actions} />);
  return {
    component,
    actions
  };
}

function setupMissingParameters() {
  const actions = {
  };
  const component = shallow(<Structure data={'{"$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#","contentVersion": "", "variables": {}, "resources":[], "outputs": {}}'} {...actions} />);
  return {
    component,
    actions
  };
}

function setupMissingOutputs() {
  const actions = {
  };
  const component = shallow(<Structure data={'{"$schema": "http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#","contentVersion": "", "variables": {}, "resources":[], "parameters": {}}'} {...actions} />);
  return {
    component,
    actions
  };
}

describe('Structure component', () => {
  it('be generated without error without variables in JSON', () => {
    setupMissingVariables();
    expect('1').toMatch('1');
  });

  it('be generated without error without parameters in JSON', () => {
    setupMissingParameters();
    expect('1').toMatch('1');
  });

  it('be generated without error without outputs in JSON', () => {
    setupMissingOutputs();
    expect('1').toMatch('1');
  });
});
