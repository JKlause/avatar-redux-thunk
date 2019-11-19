import {
  FETCH_QUOTE_LOADING,
  FETCH_QUOTE_DONE,
  FETCH_QUOTE,
} from './swansonActions';

describe('SwansonActions', ()=> {
  it('FETCH_QUOTE returns the appropriate string', () => {
    expect(FETCH_QUOTE).toEqual('FETCH_QUOTE');
  });
  it('FETCH_QUOTE_LOADING returns the appropriate string', () => {
    expect(FETCH_QUOTE_LOADING).toEqual('FETCH_QUOTE_LOADING');
  });
  it('FETCH_QUOTE_DONE returns the appropriate string', () => {
    expect(FETCH_QUOTE_DONE).toEqual('FETCH_QUOTE_DONE');
  });
});
