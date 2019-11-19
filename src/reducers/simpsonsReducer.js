import {
  FETCH_SIMPSONS_LOADING,
  FETCH_SIMPSONS_DONE,
  FETCH_SIMPSONS
} from '../actions/simpsonsActions';

const initialState = {
  quote: {},
  loading: true,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SIMPSONS_LOADING:
      return { ...state, loading: true };
    case FETCH_SIMPSONS_DONE:
      return { ...state, loading: false };
    case FETCH_SIMPSONS:
      return { ...state, quote: action.payload };
    default:
      return state;
  }
}
