import { FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS, FETCH_CHARACTERS_DONE } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_DONE:
      return { ...state, loading: false };
    case FETCH_CHARACTERS:
      return { ...state, characters: [...action.payload] };
    default:
      return state;
  }
}
