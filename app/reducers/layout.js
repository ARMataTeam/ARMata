// @flow
import { CHANGE_LAYOUT, CHANGE_VIEW, CLEAR_ERRORS, ERROR } from '../actions/layout';

type actionType = {
  type: string
};

type layoutStateType = {
  hierarchicalLayout: boolean,
  view: string,
  errorMessage: string,
  isError: boolean
};

const initialState = {
  hierarchicalLayout: false,
  view: 'Structure',
  errorMessage: '',
  isError: false
};

export default function layout(state: layoutStateType = initialState, action: actionType) {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return Object.assign({}, state, {
        hierarchicalLayout: !state.hierarchicalLayout
      });
    case CHANGE_VIEW:
      return Object.assign({}, state, {
        view: action.view
      });
    case CLEAR_ERRORS:
      console.log(state);
      return Object.assign({}, state, {
        errorMessage: '',
        isError: false
      });
    case ERROR: {
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        isError: true
      });
    }
    default:
      return state;
  }
}
