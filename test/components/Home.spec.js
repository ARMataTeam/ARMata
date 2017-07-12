import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../app/components/Home';

function setupBOM() {
  const data = '\uFEFF{}';
  const actions = {
  };
  const component = shallow(<Home data={data} selectedFilename={'C:\\temp\\some_file.txt'} {...actions} />);
  return {
    component,
    actions
  };
}

describe('Home component', () => {
  it('should throw no error if file content contains BOM', () => {
    setupBOM();
    expect('1').toMatch('1');
  });
});
