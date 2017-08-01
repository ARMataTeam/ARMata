// @flow
import { DOWNLOAD_UPDATE } from '../actions/update';
import Updater from '../updater';

type actionType = {
  type: string
};

type updateStateType = {
};

const initialState = {
};

export default function layout(state: updateStateType = initialState, action: actionType) {
  switch (action.type) {
    case DOWNLOAD_UPDATE:
      Updater.download();
      return state;
    default:
      return state;
  }
}
