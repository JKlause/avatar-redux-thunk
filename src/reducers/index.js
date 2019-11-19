import { combineReducers } from 'redux';
import characters from './charactersReducer';
import quotes from './swansonReducer';
import simpsons from './simpsonsReducer';

export default combineReducers({
  characters,
  quotes,
  simpsons
});
