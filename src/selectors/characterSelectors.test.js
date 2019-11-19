import { 
  getCharacters,
  getCharactersLoading,
  getCharactersError,
  getCharacter
} from './characterSelectors';

describe('character Selectors', () => {

  const state = {
    characters: {
      characters: [{ _id: 1 }],
      loading: true,
      error: 'error'
    }
  };
  
  it('getCharacters gets the appropriate piece of state', ()=> {
    expect(getCharacters(state)).toEqual([{ _id: 1 }]);
  });
  it('getCharactersLoading gets the appropriate piece of state', ()=> {
    expect(getCharactersLoading(state)).toEqual(true);
  });
  it('getCharactersError gets the appropriate piece of state', ()=> {
    expect(getCharactersError(state)).toEqual('error');
  });
  it('getCharacter gets the appropriate piece of state', ()=> {
    expect(getCharacter(state, 1)).toEqual({ _id: 1 });
  });
});
