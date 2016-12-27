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
export default function gameReducer(state = initialState, action) {
  // let newState;

  switch (action.type) {
    case GUESS_CLINTON:
      console.log('Picked hil');
      console.log('Original State', state);
      const newState = objectAssign({}, state, {toggle: !state.toggle});
      console.log('New State', newState);
      return newState;
    case GUESS_TRUMP:
    case RESET_GAME:
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
