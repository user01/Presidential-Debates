import {
  GUESS_CLINTON,
  GUESS_TRUMP,
  RESET_GAME
} from '../constants/actionTypes';

import dateHelper from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function chooseLeft(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: GUESS_CLINTON,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });
  };
}
export function chooseRight(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: GUESS_TRUMP,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });
  };
}
export function chooseReset(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: RESET_GAME,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });
  };
}
//
// export function calculateFuelSavings(settings, fieldName, value) {
//   return {
//     type: types.CALCULATE_FUEL_SAVINGS,
//     dateModified: dateHelper.getFormattedDateTime(),
//     settings,
//     fieldName,
//     value
//   };
// }
