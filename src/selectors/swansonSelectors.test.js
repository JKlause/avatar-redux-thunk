import { 
  getQuote,
  getQuoteLoading,
} from './swansonSelectors';

describe('swanson Selectors', () => {

  const state = {
    quotes: {
      loading: true,
      quote: 'hi'
    }
  };
  
  it('getQuote gets the appropriate piece of state', ()=> {
    expect(getQuote(state)).toEqual('hi');
  });
  it('getQuoteLoading gets the appropriate piece of state', ()=> {
    expect(getQuoteLoading(state)).toEqual(true);
  });
});
