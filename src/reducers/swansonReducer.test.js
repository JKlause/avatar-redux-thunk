import swansonReducer from './swansonReducer';
import {
  FETCH_QUOTE_LOADING,
  FETCH_QUOTE_DONE,
  FETCH_QUOTE
} from '../actions/swansonActions';

describe('swanson reducer', ()=> {
  const state = {
    quote: 'hi',
    loading: ''
  };
  it('correctly deals with FETCH_QUOTE_LOADING case', ()=> {
    expect(swansonReducer(state, { type: FETCH_QUOTE_LOADING })).toEqual({ ...state, loading: true });
  });
  it('correctly deals with FETCH_QUOTE_DONE case', ()=> {
    expect(swansonReducer(state, { type: FETCH_QUOTE_DONE })).toEqual({ ...state, loading: false });
  });
  it('correctly deals with FETCH_QUOTE case', ()=> {
    expect(swansonReducer(state, { type: FETCH_QUOTE, payload: 'dog' })).toEqual({ ...state, quote: 'dog' });
  });
  it('correctly deals with default case', () => {
    expect(swansonReducer(state, { type: 'default' })).toEqual(state);
  });
});
