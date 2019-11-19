import {
  FETCH_SIMPSONS_LOADING,
  FETCH_SIMPSONS_DONE,
  FETCH_SIMPSONS,
} from './simpsonsActions';

describe('SwansonActions', ()=> {
  it('FETCH_SIMPSONS returns the appropriate string', () => {
    expect(FETCH_SIMPSONS).toEqual('FETCH_SIMPSONS');
  });
  it('FETCH_SIMPSONS_LOADING returns the appropriate string', () => {
    expect(FETCH_SIMPSONS_LOADING).toEqual('FETCH_SIMPSONS_LOADING');
  });
  it('FETCH_SIMPSONS_DONE returns the appropriate string', () => {
    expect(FETCH_SIMPSONS_DONE).toEqual('FETCH_SIMPSONS_DONE');
  });
});
