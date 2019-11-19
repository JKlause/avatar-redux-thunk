import { 
  FETCH_CHARACTERS_LOADING, 
  FETCH_CHARACTERS, 
  FETCH_CHARACTERS_DONE, 
  FETCH_CHARACTERS_ERROR,
  FETCH_CHARACTER_LOADING, 
  FETCH_CHARACTER, 
  FETCH_CHARACTER_DONE, 
} from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: true,
  error: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTER_LOADING:
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTER_DONE:
    case FETCH_CHARACTERS_DONE:
      return { ...state, loading: false };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, error: action.payload };
    case FETCH_CHARACTERS:
      return { ...state, characters: [...action.payload] };
    case FETCH_CHARACTER:
      return { ...state, characters: [action.payload] };
    default:
      return state;
  }
}
