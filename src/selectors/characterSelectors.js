export const getCharacters = state => state.characters.characters;
export const getCharactersLoading = state => state.characters.loading;
export const getCharactersError = state => state.characters.error;
export const getCharacter = (state, id) => state.characters.characters.find(character => character._id === id);
