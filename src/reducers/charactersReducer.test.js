import characterReducer from './charactersReducer';

import { 
  FETCH_CHARACTERS_LOADING, 
  FETCH_CHARACTERS, 
  FETCH_CHARACTERS_DONE, 
  FETCH_CHARACTERS_ERROR,
  FETCH_CHARACTER_LOADING, 
  FETCH_CHARACTER, 
  FETCH_CHARACTER_DONE, 
} from '../actions/characterActions';


describe('character reducer', ()=> {

  const state = {
    characters: [],
    loading: 0,
    error: ''
  };

  it('correctly deals with FETCH_CHARACTERS_LOADING case', ()=> {
    expect(characterReducer(state, { type: FETCH_CHARACTERS_LOADING })).toEqual({ ...state, loading: true });
  });
  it('correctly deals with FETCH_CHARACTERS_DONE case', ()=> {
    expect(characterReducer(state, { type: FETCH_CHARACTERS_DONE })).toEqual({ ...state, loading: false });
  });
  it('correctly deals with FETCH_CHARACTERS_ERROR case', ()=> {
    expect(characterReducer(state, { type: FETCH_CHARACTERS_ERROR, payload: 'error' })).toEqual({ ...state, error: 'error' });
  });
  it('correctly deals with FETCH_CHARACTERS case', ()=> {
    expect(characterReducer(state, { type: FETCH_CHARACTERS, payload: 'd' })).toEqual({ ...state, characters: ['d'] });
  });
  it('correctly deals with FETCH_CHARACTER_LOADING case', ()=> {
    expect(characterReducer(state, { type: FETCH_CHARACTER_LOADING })).toEqual({ ...state, loading: true });
  });
  it('correctly deals with FETCH_CHARACTER_DONE case', ()=> {
    expect(characterReducer(state, { type: FETCH_CHARACTER_DONE })).toEqual({ ...state, loading: false });
  });
  it('correctly deals with FETCH_CHARACTER case', ()=> {
    expect(characterReducer(state, { type: FETCH_CHARACTER, payload: 'dog' })).toEqual({ ...state, characters: ['dog'] });
  });
  it('correctly deals with default case', () => {
    expect(characterReducer(state, { type: 'default' })).toEqual(state);
  });
});
