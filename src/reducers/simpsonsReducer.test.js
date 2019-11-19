import simpsonsReducer from './simpsonsReducer';
import {
  FETCH_SIMPSONS_LOADING,
  FETCH_SIMPSONS_DONE,
  FETCH_SIMPSONS
} from '../actions/simpsonsActions';


describe('Simpsons reducer', ()=> {
  const state = {
    quote: {},
    loading: true,
  };
  
  it('correctly deals with FETCH_QUOTE_LOADING case', ()=> {
    expect(simpsonsReducer(state, { type: FETCH_SIMPSONS_LOADING })).toEqual({ ...state, loading: true });
  });
  it('correctly deals with FETCH_SIMPSONS_DONE case', ()=> {
    expect(simpsonsReducer(state, { type: FETCH_SIMPSONS_DONE })).toEqual({ ...state, loading: false });
  });
  it('correctly deals with FETCH_SIMPSONS case', ()=> {
    expect(simpsonsReducer(state, { type: FETCH_SIMPSONS, payload: 'dog' })).toEqual({ ...state, quote: 'dog' });
  });
  it('correctly deals with default case', () => {
    expect(simpsonsReducer(state, { type: 'default' })).toEqual(state);
  });
});
