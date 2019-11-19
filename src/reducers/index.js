import { combineReducers } from 'redux';
import characters from './charactersReducer';
import quotes from './swansonReducer';
import simpsons from './simspsonsReducer';

export default combineReducers({
  characters,
  quotes,
  simpsons
});
