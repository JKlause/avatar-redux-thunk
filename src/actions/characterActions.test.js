import {
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_DONE,
  FETCH_CHARACTERS_ERROR,
  FETCH_CHARACTERS,
  FETCH_CHARACTER_LOADING,
  FETCH_CHARACTER_DONE,
  FETCH_CHARACTER,
} from './characterActions';

describe('Character Actions', ()=> {
  it('FETCH_CHARACTERS returns the appropriate string', () => {
    expect(FETCH_CHARACTERS).toEqual('FETCH_CHARACTERS');
  });
  it('FETCH_CHARACTERS_LOADING returns the appropriate string', () => {
    expect(FETCH_CHARACTERS_LOADING).toEqual('FETCH_CHARACTERS_LOADING');
  });
  it('FETCH_CHARACTERS_DONE returns the appropriate string', () => {
    expect(FETCH_CHARACTERS_DONE).toEqual('FETCH_CHARACTERS_DONE');
  });
  it('FETCH_CHARACTERS_ERROR returns the appropriate string', () => {
    expect(FETCH_CHARACTERS_ERROR).toEqual('FETCH_CHARACTERS_ERROR');
  });
  it('FETCH_CHARACTER returns the appropriate string', () => {
    expect(FETCH_CHARACTER).toEqual('FETCH_CHARACTER');
  });
  it('FETCH_CHARACTER_DONE returns the appropriate string', () => {
    expect(FETCH_CHARACTER_DONE).toEqual('FETCH_CHARACTER_DONE');
  });
  it('FETCH_CHARACTER_LOADING returns the appropriate string', () => {
    expect(FETCH_CHARACTER_LOADING).toEqual('FETCH_CHARACTER_LOADING');
  });
});
