// @flow
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';

type actionType = {
  type: string
};

export function toggleHierarchicalLayout() {
  return (dispatch: (action: actionType) => void) => {
    dispatch({ type: CHANGE_LAYOUT });
  };
}
