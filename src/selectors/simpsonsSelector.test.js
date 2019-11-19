import { 
  getSimpsonsQuote,
  getSimpsonsLoading,
} from './simpsonsSelector';

describe('Simpsons Selectors', () => {

  const state = {
    simpsons: {
      loading: true,
      quote: 'hi'
    }
  };
  
  it('getSimpsonsQuote gets the appropriate piece of state', ()=> {
    expect(getSimpsonsQuote(state)).toEqual('hi');
  });
  it('getSimpsonsLoading gets the appropriate piece of state', ()=> {
    expect(getSimpsonsLoading(state)).toEqual(true);
  });
});
