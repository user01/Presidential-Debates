import {
  GUESS_CLINTON,
  GUESS_TRUMP,
  RESET_GAME
} from '../constants/actionTypes';
import initialState from './initialState';
import emptyGameState from './emptyGameState';
import R from 'ramda';

const newStateBasedOnGuess = (guess_name, state) => {

  // console.log('Original State', state);

  const guessingIndex = R.findIndex(R.propEq('guess', 'none'), state.state);
  // console.log(`New index ${guessingIndex}`);
  // if there isn't a valid guess group to be made, ignore it
  if (guessingIndex == -1) {
    return state;
  }


  const newState = R.merge(state, {
    toggle: !state.toggle,
    state: R.addIndex(R.map)((elm, idx) => {
      if (idx != guessingIndex) return elm;
      return R.merge(elm, { guess: guess_name });
    })(state.state)
  });
  // console.log('New State', newState);
  return newState;
};

export default function gameReducer(state = initialState, action) {

  switch (action.type) {
    case GUESS_CLINTON:
      return newStateBasedOnGuess('clinton', state);
    case GUESS_TRUMP:
      return newStateBasedOnGuess('trump', state);
    case RESET_GAME:
      return R.merge(state, {
        state: emptyGameState()
      });
    default:
      return state;
  }
}
