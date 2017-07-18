// @flow
import { UPDATE_ERROR, CHECKING_FOR_UPDATE, UPDATE_AVAILABLE, UPDATE_NOT_AVAILABLE } from '../actions/update';


type actionType = {
  type: string
};

type updateStateType = {
  errorMessage: string,
  isError: boolean
};

const initialState = {
  errorMessage: '',
  isError: false
};

export default function update(state: updateStateType = initialState, action: actionType) {
  switch (action.type) {
    case UPDATE_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.error,
        isError: true
      });
    default: {
      return state;
    }
  }
}
