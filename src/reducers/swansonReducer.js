import {
  FETCH_QUOTE_LOADING,
  FETCH_QUOTE_DONE,
  FETCH_QUOTE
} from '../actions/swansonActions';

const initialState = {
  quote: '',
  loading: true,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTE_DONE:
      return { ...state, loading: false };
    case FETCH_QUOTE:
      return { ...state, quote: action.payload };
    default:
      return state;
  }
}
