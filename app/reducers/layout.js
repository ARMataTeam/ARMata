// @flow
import { CHANGE_LAYOUT } from '../actions/layout';

type actionType = {
  type: string
};

type layoutStateType = {
  hierarchicalLayout: boolean
};

const initialState = {
  hierarchicalLayout: false
};

export default function layout(state: layoutStateType = initialState, action: actionType) {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return Object.assign({}, state, {
        hierarchicalLayout: !state.hierarchicalLayout
      });
    default:
      return state;
  }
}
