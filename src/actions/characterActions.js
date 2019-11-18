import { getCharacters, getCharacter } from '../services/lastAirBenderAPI';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';
export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';


export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
  pendingType: FETCH_CHARACTERS_LOADING,
  fulfilledType: FETCH_CHARACTERS_DONE,
  payload: getCharacters()
});



export const FETCH_CHARACTER_LOADING = 'FETCH_CHARACTER_LOADING';
export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_CHARACTER_DONE = 'FETCH_CHARACTER_DONE';

export const fetchCharacter = id => ({
  type: FETCH_CHARACTER,
  pendingType: FETCH_CHARACTER_LOADING,
  fulfilledType: FETCH_CHARACTER_DONE,
  payload: getCharacter(id),
});
