import {
  combineReducers
} from 'redux';
import gameReducer from './gameReducer';
import {
  routerReducer
} from 'react-router-redux';

const rootReducer = combineReducers({
  game: gameReducer,
  routing: routerReducer
});

export default rootReducer;
