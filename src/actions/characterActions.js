import { getCharacters } from '../services/lastAirBenderAPI';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';
export const fetchCharacters = () => dispatch => {
  dispatch({
    type: FETCH_CHARACTERS_LOADING
  });

  getCharacters()
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });

      dispatch({
        type: FETCH_CHARACTERS_DONE
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_CHARACTERS_ERROR,
        payload: error
      });
    });
};
