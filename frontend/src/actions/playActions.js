import {
  GUESS_CLINTON,
  GUESS_TRUMP,
  RESET_GAME
} from '../constants/actionTypes';

import dateHelper from '../utils/dateHelper';

export function chooseLeft(settings) {
  return function (dispatch) {
    return dispatch({
      type: GUESS_CLINTON,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });
  };
}
export function chooseRight(settings) {
  return function (dispatch) {
    return dispatch({
      type: GUESS_TRUMP,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });
  };
}
export function chooseReset(settings) {
  return function (dispatch) {
    return dispatch({
      type: RESET_GAME,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });
  };
}
