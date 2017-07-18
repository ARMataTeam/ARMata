// @flow
export const CHECKING_FOR_UPDATE = 'CHECKINF_FOR_UPDATE';
export const UPDATE_AVAILABLE = 'UPDATE_AVAILABLE';
export const UPDATE_NOT_AVAILABLE = 'UPDATE_NOT_AVAILABLE';

type actionType = {
  type: string
};

export function checkingForUpdate() {
  return { type: CHECKING_FOR_UPDATE };
}

export function updateAvailable() {
  return { type: UPDATE_AVAILABLE };
}

export function updateNotAvailable() {
  return { type: UPDATE_NOT_AVAILABLE };
}
