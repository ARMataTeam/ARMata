import { spy } from 'sinon';
import * as actions from '../../app/actions/layout';

describe('actions', () => {
  it('should toggleHierarchicalLayout should create toggleHierarchicalLayout action', () => {
    const fn = actions.toggleHierarchicalLayout();
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    const getState = () => ({ hierarchicalLayout: false });
    fn(dispatch, getState);
    expect(dispatch.calledWith({ type: actions.CHANGE_LAYOUT })).toBe(true);
  });

  it('should changeView should create changeView action', () => {
    const fn = actions.changeView('SOME_VIEW');
    expect(fn).toBeInstanceOf(Function);
    const dispatch = spy();
    const getState = () => ({ view: 'Structure' });
    fn(dispatch, getState);
    expect(dispatch.calledWith({ type: actions.CHANGE_VIEW, view: 'SOME_VIEW' })).toBe(true);
  });
});
