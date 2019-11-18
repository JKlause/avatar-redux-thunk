import { FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS, FETCH_CHARACTERS_DONE, FETCH_CHARACTERS_ERROR } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: true,
  error: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_DONE:
      return { ...state, loading: false };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, error: action.payload };
    case FETCH_CHARACTERS:
      return { ...state, characters: [...action.payload] };
    default:
      return state;
  }
}
