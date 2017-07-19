import * as actions from '../../app/actions/fileDialog';

describe('actions', () => {
  it('should open should create open action', () => {
    expect(actions.open()).toMatchSnapshot();
  });
});
