import {
  GUESS_CLINTON,
  GUESS_TRUMP,
  RESET_GAME
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function gameReducer(state = initialState.game, action) {
  // let newState;

  switch (action.type) {
    case GUESS_CLINTON:
      return objectAssign({}, state, {});
    case GUESS_TRUMP:
      return objectAssign({}, state, {});
    case RESET_GAME:
      return objectAssign({}, state, {});
    //
    // case CALCULATE_FUEL_SAVINGS:
    //   newState = objectAssign({}, state);
    //   newState[action.fieldName] = action.value;
    //   newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
    //   newState.dateModified = action.dateModified;
    //
    //   if (newState.necessaryDataIsProvidedToCalculateSavings) {
    //     newState.savings = calculator().calculateSavings(newState);
    //   }
    //
    //   return newState;

    default:
      return state;
  }
}
