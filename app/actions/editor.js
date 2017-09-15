// @flow
export const SET_TEMPLATE = 'SET_TEMPLATE';

type actionType = {
  type: string
};

export function setNewTemplate(template: string) {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: SET_TEMPLATE, template });
  };
}
